'use client'

import React, {
  createContext,
  useContext,
  useId,
  useState,
  Children,
  useEffect,
  useRef,
} from "react";
 
type TabContextType = {
  activeIndex: number;
  setActiveIndex: React.Dispatch<React.SetStateAction<number>>;
  titleId: string;
  tabIdPrefix: string;
  panelIdPrefix: string;
};
 
const TabContext = createContext<TabContextType | null>(null);
 
const useTabContext = () => {
  const context = useContext(TabContext);
  if (!context) {
    throw new Error("TabContext must be used within a TabProvider");
  }
  return context;
};
 
type GroupProps = {
  children: React.ReactNode;
  activeIndex?: number;
};
 
const Group = ({
  activeIndex: defaultActiveIndex = 0,
  children,
}: GroupProps) => {
  const [activeIndex, setActiveIndex] = useState(defaultActiveIndex);
  const titleId = `tab-title-${useId()}`;
  const tabIdPrefix = `tab-${useId()}`;
  const panelIdPrefix = `panel-${useId()}`;
 
  return (
    <TabContext.Provider
      value={{
        activeIndex,
        setActiveIndex,
        titleId,
        tabIdPrefix,
        panelIdPrefix,
      }}
    >
      {children}
    </TabContext.Provider>
  );
};
 
const Title = ({ children }: { children: React.ReactNode }) => {
  const { titleId } = useTabContext();
 
  return <div id={titleId}>{children}</div>;
};
 
const useKeyboardNavigation = (
  tabListRef: React.RefObject<HTMLDivElement>,
  TabCount: number
) => {
  const { setActiveIndex, tabIdPrefix } = useTabContext();
  const focusTab = (index: number) => {
    const tab = tabListRef.current?.querySelector(
      `[id="${tabIdPrefix}-${index}"]`
    );
    if (tab) {
      (tab as HTMLElement).focus();
    }
  };
 
  const handleKeyDown = (event: KeyboardEvent) => {
    switch (event.key) {
      case "ArrowLeft":
        event.preventDefault();
        setActiveIndex((prevIndex: number) => {
          if (prevIndex === 0) {
            const nextIndex = TabCount - 1;
            focusTab(nextIndex);
            return nextIndex;
          } else {
            const nextIndex = prevIndex - 1;
            focusTab(nextIndex);
            return nextIndex;
          }
        });
 
        break;
      case "ArrowRight":
        event.preventDefault();
        setActiveIndex((prevIndex: number) => {
          if (prevIndex === TabCount - 1) {
            const nextIndex = 0;
            focusTab(nextIndex);
            return nextIndex;
          } else {
            const nextIndex = prevIndex + 1;
            focusTab(nextIndex);
            return nextIndex;
          }
        });
        break;
      default:
        break;
    }
  };
  useEffect(() => {
    const tabList = tabListRef.current;
    tabList?.addEventListener("keydown", handleKeyDown);
 
    return () => {
      tabList?.removeEventListener("keydown", handleKeyDown);
    };
  }, [tabListRef, handleKeyDown]);
};
 
const List = ({ children }: { children: React.ReactNode }) => {
  const { titleId } = useTabContext();
  const tabListRef = useRef<HTMLDivElement>(null);
  useKeyboardNavigation(tabListRef, Children.count(children));
 
  return (
    <div role="tablist" aria-labelledby={titleId} ref={tabListRef}>
      {Children.map(children, (child, index) => {
        return React.cloneElement(child as React.ReactElement, { index });
      })}
    </div>
  );
};
 
const PanelList = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      {Children.map(children, (child, index) => {
        return React.cloneElement(child as React.ReactElement, { index });
      })}
    </div>
  );
};
 
type TabProps = {
  children: React.ReactNode;
  index?: number;
};
 
const Pabel = ({ children, index }: TabProps) => {
  const { activeIndex, tabIdPrefix, panelIdPrefix } = useTabContext();
  if (index === undefined) {
    throw new Error("Tab must have an index prop");
  }
 
  return (
    <div
      role="tabpanel"
      aria-labelledby={`${tabIdPrefix}-${index}`}
      id={`${panelIdPrefix}-${index}`}
      className={index === activeIndex ? "" : "hidden"}
      tabIndex={0}
    >
      {children}
    </div>
  );
};
 
const Tab = ({ children, index }: TabProps) => {
  const { activeIndex, setActiveIndex, tabIdPrefix, panelIdPrefix } =
    useTabContext();
 
  if (index === undefined) {
    throw new Error("Tab must have an index prop");
  }
 
  return (
    <button
      role="tab"
      aria-controls={`${panelIdPrefix}-${index}`}
      aria-selected={index === activeIndex}
      id={`${tabIdPrefix}-${index}`}
      onClick={() => setActiveIndex(index)}
      tabIndex={index === activeIndex ? 0 : -1}
    >
      {children}
    </button>
  );
};
 
Tab.Group = Group;
Tab.Title = Title;
Tab.List = List;
Tab.Pabel = Pabel;
Tab.PanelList = PanelList;
 
export default Tab;
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"

export default function Home() {
  return (
    <Tabs defaultValue="tab1" className="w-[600px]">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="tab1">Tab1</TabsTrigger>
        <TabsTrigger value="tab2">Tab2</TabsTrigger>
      </TabsList>
      <TabsContent value="tab1">
        Tab1Content
      </TabsContent>
      <TabsContent value="tab2">
        Tab2Content
      </TabsContent>
    </Tabs>
  )
}

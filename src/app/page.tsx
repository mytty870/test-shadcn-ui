'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
// import {
//   Tabs,
//   TabsContent,
//   TabsList,
//   TabsTrigger,
// } from "@/components/ui/tabs"

import Tab from "@/components/ui/tabs/Tabs"

export default function Home() {
  return (
    <>
    {/* <Tabs defaultValue="tab1" className="w-[600px]">
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
    </Tabs> */}
    <Card className="justify-center text-center max-w-[300px]">
      <CardHeader className="text-balance">
        <CardTitle className="text-balance">CardTitleBBBBBBBBBBBBBBBbbBBBBBBBBBBBb</CardTitle>
      </CardHeader>
      <CardContent>
        aaaa
      </CardContent>
    </Card>

    <Tab.Group>
      <Tab.Title>タブテスト</Tab.Title>
      <Tab.List>
        <Tab>タブ1</Tab>
        <Tab>タブ2</Tab>
        <Tab>タブ3</Tab>
      </Tab.List>
      <Tab.PanelList>
        <Tab.Pabel>タブ1の内容</Tab.Pabel>
        <Tab.Pabel>タブ2の内容</Tab.Pabel>
        <Tab.Pabel>タブ3の内容</Tab.Pabel>
      </Tab.PanelList>
    </Tab.Group>
    </>
  )
}

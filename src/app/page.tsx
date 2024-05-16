'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { TabsList, Tabs,TabsTrigger, TabsContent } from "@/components/ui/tabs"
// import {
//   Tabs,
//   TabsContent,
//   TabsList,
//   TabsTrigger,
// } from "@/components/ui/tabs"

import Tab from "@/components/ui/tabs/Tabs"
// import { Tabs, TabsList, TabsTrigger, TabsContent } from "@radix-ui/react-tabs"
// import { Tabs, TabsList, TabsTrigger, TabsContent } from "@radix-ui/react-tabs"

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
    {/* <Tabs defaultValue="imai" className="w-[600px]">
    <TabsList className="border-b items-center justify-center grid grid-cols-[repeat(auto-fit,minmax(80px,1fr))] inline-flex font-medium">
      <TabsTrigger value="imai" className="border-b-2 border-[#0000] data-[state=active]:border-black disabled:border-[#0000] text-[#65717b] disabled:text-[#65717b] hover:border-black items-center justify-center font-medium disabled:opacity-50 disabled:cursor-not-allowed data-[state=active]:text-black hover:text-black min-h-12">Imai</TabsTrigger>
      <TabsTrigger value="m88" className='border-b-2 border-[#0000] data-[state=active]:border-black disabled:border-[#0000] text-[#65717b] disabled:text-[#65717b] hover:border-black items-center justify-center font-medium disabled:opacity-50 disabled:cursor-not-allowed data-[state=active]:text-black hover:text-black min-h-12'>Mytty</TabsTrigger>
      <TabsTrigger value="mytty" className='border-b-2 border-[#0000] data-[state=active]:border-black disabled:border-[#0000] text-[#65717b] disabled:text-[#65717b] hover:border-black items-center justify-center font-medium disabled:opacity-50 disabled:cursor-not-allowed data-[state=active]:text-black hover:text-black min-h-12'>Mytty</TabsTrigger>
    </TabsList>
    <TabsContent value="imai" className="">imai</TabsContent>
    <TabsContent value="shota">shotaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</TabsContent>
  </Tabs> */}
  <Tabs defaultValue="tab-a" className="w-[600px]">
    <TabsList>
      <TabsTrigger value="tab-a">Tab A</TabsTrigger>
      <TabsTrigger value="tab-b">Tab B</TabsTrigger>
    </TabsList>
    <TabsContent value="tab-a">
      Tab A Content
    </TabsContent>
    <TabsContent value="tab-b">
      Tab B Content
    </TabsContent>
  </Tabs>
    </>
  )
}

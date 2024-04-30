import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="space-y-5">
      <div className="font-bold">Variant</div>
      <div className="flex space-x-5">
        <Button variantColor="red">Default</Button>
        {/* <Button variant="destructive">Destructive</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="link">Link</Button> */}
      </div>
      <div className="font-bold">Size</div>
      <div className="flex space-x-5">
        <Button>Default</Button>
        <Button size="sm">Small</Button>
        <Button size="lg">Large</Button>
        <Button size="icon">Icon</Button>
      </div>
    </div>
  );
}

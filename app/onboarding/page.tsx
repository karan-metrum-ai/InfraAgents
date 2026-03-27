import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Search, Plus, Upload } from "lucide-react"
import Autonomous from "@/components/Onboarding/Autonomous";
import ManualDiscovery from "@/components/Onboarding/ManualDiscovery";
import BulkUpload from "@/components/Onboarding/BulkUpload";

export default function Onboarding() {
    return <div className="container mx-auto mt-5">
        <div className="flex flex-col items-center justify-center">
            <h1 className="text-4xl font-bold mt-1">Infrastructure Discovery Hub</h1>
            <h2 className="text-xl text-gray-500 mt-2">Discover and map your infrastructure devices</h2>
            <Tabs defaultValue="auto-discovery" className="mt-6 w-full max-w-4xl mx-auto flex flex-col items-stretch">
                <TabsList variant="glass-lg" className="gap-0 w-full">
                    <TabsTrigger value="auto-discovery" variant="bigger" className="flex flex-col items-center justify-center gap-1.5 flex-1" >
                        <div className="flex items-center justify-center gap-2">
                            <Search className="size-4" />
                            <p className="font-semibold">Autonomous Discovery</p>
                        </div>
                        <span className="text-xs text-white/40">Scan network automatically for devices</span>
                    </TabsTrigger>
                    <div className="w-px self-stretch my-2 bg-white/[0.08]" />
                    <TabsTrigger value="manual-discovery" variant="bigger" className="flex flex-col items-center justify-center gap-1.5 flex-1">
                        <div className="flex items-center justify-center gap-2">
                            <Plus className="size-4" />
                            <p className="font-semibold">Manual Discovery</p>
                        </div>
                        <span className="text-xs text-white/40">Manually add devices to the inventory</span>
                    </TabsTrigger>
                    <div className="w-px self-stretch my-2 bg-white/[0.08]" />
                    <TabsTrigger value="bulk-upload" variant="bigger" className="flex flex-col items-center justify-center gap-1.5 flex-1">
                        <div className="flex items-center justify-center gap-2">
                            <Upload className="size-4" />
                            <p className="font-semibold">Bulk Upload</p>
                        </div>
                        <span className="text-xs text-white/40">Upload a CSV file to add devices to the inventory</span>
                    </TabsTrigger>
                </TabsList>
                <TabsContent value="auto-discovery" className="mt-6 w-full">
                    <Autonomous />
                </TabsContent>
                <TabsContent value="manual-discovery" className="mt-6">
                    <ManualDiscovery />
                </TabsContent>
                <TabsContent value="bulk-upload" className="mt-6">
                    <BulkUpload />
                </TabsContent>
            </Tabs>
        </div>
    </div>
}

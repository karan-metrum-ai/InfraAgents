import { Settings, Layers, Plus } from "lucide-react";
import { Card, CardTitle, CardHeader, CardContent } from "../ui/card";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

export default function ManualDiscovery() {
    return <div className="flex gap-4 w-full">
        <Card className="w-full">
            <CardHeader>
                <CardTitle>
                    <div className="flex items-center gap-2">
                        <Settings className="size-6" />
                        <p className="font-semibold text-lg">Add new device</p>
                    </div>
                    <p className="text-xs text-white/40 mt-1">Manually add devices to the inventory</p>
                </CardTitle>
                <CardContent>
                <div className="flex flex-col gap-1">
                    <p>IP Address</p>
                        <Input type="text" placeholder="192.168.1.1" className="w-full" />
                        <p className="text-xs text-white/40">Enter the IP address of the device you want to add</p>
                    <Button variant="default" className="w-full mt-4"><Plus className="size-4" /> Add device</Button>
                    <p className="text-xs text-white/40">Add multiple IP addresses to discover and onboard them</p>
                </div>
                </CardContent>
            </CardHeader>
        </Card>
        <Card className="w-full">
            <CardHeader>
                <CardTitle>
                    <div className="flex items-center gap-2">
                        <Layers className="size-6" />
                        <p className="font-semibold text-lg">Discovered devices</p>
                    </div>
                    <p className="text-xs text-white/40 mt-1">View and manage discovered devices</p>
                </CardTitle>
            </CardHeader>
        </Card>
    </div>
}
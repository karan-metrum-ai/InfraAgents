import { Wifi } from "lucide-react";
import { Card, CardTitle, CardHeader, CardContent } from "../ui/card";
import { TabsList, TabsTrigger, Tabs, TabsContent } from "../ui/tabs";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

export default function Autonomous() {
    return <div className="w-full">
        <Card className="w-full">
            <CardHeader className="">
                <CardTitle>
                    <div className="flex items-center gap-2">
                        <Wifi className="size-6" />
                        <p className="font-semibold text-lg">Scan Network</p>
                    </div>
                    <p className="text-xs text-white/40 mt-1">Automatically discover devices on your network</p>
                </CardTitle>
            </CardHeader>
            <CardContent >
                <Tabs defaultValue="subnet-scan" className="w-full" >
                    <TabsList variant="glass-lg" className="w-full" radius="md" >
                        <TabsTrigger value="subnet-scan" variant="small" className="flex-1" radius="sm">
                            Subnet Scan
                        </TabsTrigger>
                        <TabsTrigger value="ip-range-scan" variant="small" className="flex-1" radius="sm">
                            IP Range Scan
                        </TabsTrigger>
                    </TabsList>
                    <TabsContent value="subnet-scan">
                        <div className="flex flex-col gap-2 space-y-2 ">
                            <p>Network Subnet</p>
                            <Input type="text" placeholder="192.168.1.1" className="w-full" />
                            <p className="text-xs text-white/40">
                               Specify the subnet in CIDR notation (e.g., 192.168.1.0/24, 10.0.0.0/16)
                            </p>
                            <Button variant="default" className="w-full mt-4">Start Subnet  Scan</Button>
                        </div>
                    </TabsContent>
                    <TabsContent value="ip-range-scan">
                        <div className="flex flex-col gap-2 space-y-1 ">
                            <p>IP Range</p>
                            <div className="flex gap-2 ">
                                <Input type="text" placeholder="192.168.1.1" className="w-1/2" />
                                <Input type="text" placeholder="192.168.1.10" className="w-1/2" />
                            </div>
                            <p className="text-xs text-white/40">Specify the subnet in CIDR notation (e.g., 192.168.1.0/24, 10.0.0.0/16)</p>
                            <Button variant="default" className="w-full mt-4">Start IP Range Scan</Button>
                        </div>
                    </TabsContent>
                </Tabs>
            </CardContent>
        </Card>
    </div>
}
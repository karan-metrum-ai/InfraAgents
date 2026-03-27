'use client'
import Globe from "react-globe.gl"
import { GlobeData } from "@/data/GlobeData"
import { CardHeader, Card, CardContent, CardTitle, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Search, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
    ButtonGroup,
} from "@/components/ui/button-group"
import { Separator } from "@/components/ui/separator"



export default function DigitalTwin() {
    return (
        <div className="w-full h-screen">
            <Globe
                backgroundColor="rgba(0,0,0,0)"
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                pointsData={GlobeData}
                pointLat="lat"
                pointLng="lng"
                pointRadius={(d: any) => (d.value || 50) / 100}
                pointColor={() => '#FF0000'}
                pointAltitude={0.01}
                pointResolution={15}
                showAtmosphere={true}
                atmosphereColor="#87CEEB"
                atmosphereAltitude={0.15}
            />
            <DataCenter />
            <Button className="absolute bottom-4 right-5 z-10">
                <span>Continue to team building</span>
                <ArrowRight className="size-4" />
            </Button>
            <DataCenterCards />
        </div>
    )
}

function DataCenter() {
    return (
        <div className="absolute top-4 right-5 z-10 min-h-[90vh] overflow-y-auto">
            <Card className="w-full px-0 py-4">
                <CardHeader className="px-auto py-0">
                    <CardTitle>Data Center</CardTitle>
                </CardHeader>
                <CardContent className="flex items-center gap-1 w-full">
                    <ButtonGroup>
                        <Input placeholder="Search..." />
                        <Button variant="outline" aria-label="Search">
                            <Search className="size-4" />
                        </Button>
                    </ButtonGroup>
                </CardContent>
                <Separator />
            </Card>
        </div>
    )
} 

const DataCenterCards = () => {
    return (
       <div className="absolute bottom-10 left-5 z-10">
        <div className="bg-white text-black p-4 rounded-lg">
            13
        </div>
       </div>
    )
} 
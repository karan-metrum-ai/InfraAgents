"use client"

import { useState } from "react"
import { Upload, CheckCircle2 } from "lucide-react"
import { Card, CardHeader, CardTitle, CardContent } from "../ui/card"
import { Stepper, StepperItem, StepperContent, StepperIndicator } from "../ui/stepper"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "../ui/select"
import { Button } from "../ui/button"

const foundationObjectTypes = [
  { value: "tenant-groups", label: "Tenant Groups" },
  { value: "tenants", label: "Tenants" },
  { value: "tags", label: "Tags" },
  { value: "manufacturers", label: "Manufacturers" },
  { value: "device-roles", label: "Device Roles" },
  { value: "rack-roles", label: "Rack Roles" },
  { value: "regions", label: "Regions" },
  { value: "site-groups", label: "Site Groups" },
]

export default function BulkUpload() {
  const [currentStep, setCurrentStep] = useState(1)
  const [selectedObjectType, setSelectedObjectType] = useState<string>("")
  const [uploadedFiles, setUploadedFiles] = useState<Record<number, File | null>>({
    1: null,
    2: null,
    3: null,
    4: null,
    5: null,
  })

  const handleFileUpload = (step: number, file: File | null) => {
    setUploadedFiles((prev) => ({ ...prev, [step]: file }))
  }

  const handleNext = () => {
    if (currentStep < 5) {
      setCurrentStep(currentStep + 1)
    }
  }

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const getRemainingCount = () => {
    const completed = Object.values(uploadedFiles).filter((f) => f !== null).length
    return 8 - completed
  }

  return (
    <div className="w-full max-w-4xl mx-auto">
      <Stepper value={currentStep} onStepChange={setCurrentStep}>
        <div className="flex items-center justify-center gap-2 mb-8">
          {[1, 2, 3, 4, 5].map((step) => (
            <StepperIndicator
              key={step}
              step={step}
              onClick={() => setCurrentStep(step)}
            />
          ))}
        </div>

        <StepperContent>
          <Card className="w-full border rounded-xl">
            <CardHeader>
              <CardTitle>
                <div className="flex items-center gap-2">
                  <div className="flex items-center justify-center size-6 rounded-full bg-white text-black text-md font-semibold">
                    {currentStep}
                  </div>
                  <div>
                    {currentStep === 1 && "Foundation Objects"}
                    {currentStep === 2 && "Regions"}
                    {currentStep === 3 && "Sites"}
                    {currentStep === 4 && "Locations & Racks"}
                    {currentStep === 5 && "Devices & Connections"}
                  </div>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <StepperItem step={1}>
                <div className="flex flex-col gap-4">
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">
                      Tenant groups, tenants, tags, manufacturers, device roles, rack roles, regions, site groups
                    </p>
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-medium">
                      Select Object Type {getRemainingCount() > 0 && `(${getRemainingCount()} remaining)`}
                    </label>
                    <Select value={selectedObjectType} onValueChange={setSelectedObjectType}>
                      <SelectTrigger>
                        <SelectValue placeholder="Choose object type..." />
                      </SelectTrigger>
                      <SelectContent>
                        {foundationObjectTypes.map((type) => (
                          <SelectItem key={type.value} value={type.value}>
                            {type.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  {selectedObjectType && (
                    <div className="flex flex-col gap-2">
                      <label className="text-sm font-medium">Upload CSV File</label>
                      <div className="border-2 border-dashed border-input rounded-md p-6 flex flex-col items-center justify-center gap-2">
                        <input
                          type="file"
                          accept=".csv"
                          className="hidden"
                          id="file-upload-1"
                          onChange={(e) => {
                            const file = e.target.files?.[0] || null
                            handleFileUpload(1, file)
                          }}
                        />
                        <label
                          htmlFor="file-upload-1"
                          className="cursor-pointer flex flex-col items-center gap-2"
                        >
                          {uploadedFiles[1] ? (
                            <>
                              <CheckCircle2 className="size-8 text-primary" />
                              <span className="text-sm font-medium">{uploadedFiles[1].name}</span>
                            </>
                          ) : (
                            <>
                              <Upload className="size-8 text-muted-foreground" />
                              <span className="text-sm text-muted-foreground">
                                Click to upload or drag and drop
                              </span>
                              <span className="text-xs text-muted-foreground">CSV files only</span>
                            </>
                          )}
                        </label>
                      </div>
                    </div>
                  )}
                </div>
              </StepperItem>

              <StepperItem step={2}>
                <div className="flex flex-col gap-4">
                  <div>
                    <p className="text-sm text-muted-foreground mb-4">
                      Upload a CSV file containing region data. The file should include columns for region name, slug, description, and parent region (if applicable).
                    </p>
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-medium">Upload CSV File</label>
                    <div className="border-2 border-dashed border-input rounded-md p-6 flex flex-col items-center justify-center gap-2">
                      <input
                        type="file"
                        accept=".csv"
                        className="hidden"
                        id="file-upload-2"
                        onChange={(e) => {
                          const file = e.target.files?.[0] || null
                          handleFileUpload(2, file)
                        }}
                      />
                      <label
                        htmlFor="file-upload-2"
                        className="cursor-pointer flex flex-col items-center gap-2"
                      >
                        {uploadedFiles[2] ? (
                          <>
                            <CheckCircle2 className="size-8 text-primary" />
                            <span className="text-sm font-medium">{uploadedFiles[2].name}</span>
                          </>
                        ) : (
                          <>
                            <Upload className="size-8 text-muted-foreground" />
                            <span className="text-sm text-muted-foreground">
                              Click to upload or drag and drop
                            </span>
                            <span className="text-xs text-muted-foreground">CSV files only</span>
                          </>
                        )}
                      </label>
                    </div>
                  </div>
                </div>
              </StepperItem>

              <StepperItem step={3}>
                <div className="flex flex-col gap-4">
                  <div>
                    <p className="text-sm text-muted-foreground mb-4">
                      Upload a CSV file containing site data. The file should include columns for site name, slug, status, region, latitude, longitude, and physical address.
                    </p>
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-medium">Upload CSV File</label>
                    <div className="border-2 border-dashed border-input rounded-md p-6 flex flex-col items-center justify-center gap-2">
                      <input
                        type="file"
                        accept=".csv"
                        className="hidden"
                        id="file-upload-3"
                        onChange={(e) => {
                          const file = e.target.files?.[0] || null
                          handleFileUpload(3, file)
                        }}
                      />
                      <label
                        htmlFor="file-upload-3"
                        className="cursor-pointer flex flex-col items-center gap-2"
                      >
                        {uploadedFiles[3] ? (
                          <>
                            <CheckCircle2 className="size-8 text-primary" />
                            <span className="text-sm font-medium">{uploadedFiles[3].name}</span>
                          </>
                        ) : (
                          <>
                            <Upload className="size-8 text-muted-foreground" />
                            <span className="text-sm text-muted-foreground">
                              Click to upload or drag and drop
                            </span>
                            <span className="text-xs text-muted-foreground">CSV files only</span>
                          </>
                        )}
                      </label>
                    </div>
                  </div>
                </div>
              </StepperItem>

              <StepperItem step={4}>
                <div className="flex flex-col gap-4">
                  <div>
                    <p className="text-sm text-muted-foreground mb-4">
                      Upload a CSV file containing location and rack data. The file should include columns for location name, status, site, parent location, rack name, rack role, U height, and serial number.
                    </p>
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-medium">Upload CSV File</label>
                    <div className="border-2 border-dashed border-input rounded-md p-6 flex flex-col items-center justify-center gap-2">
                      <input
                        type="file"
                        accept=".csv"
                        className="hidden"
                        id="file-upload-4"
                        onChange={(e) => {
                          const file = e.target.files?.[0] || null
                          handleFileUpload(4, file)
                        }}
                      />
                      <label
                        htmlFor="file-upload-4"
                        className="cursor-pointer flex flex-col items-center gap-2"
                      >
                        {uploadedFiles[4] ? (
                          <>
                            <CheckCircle2 className="size-8 text-primary" />
                            <span className="text-sm font-medium">{uploadedFiles[4].name}</span>
                          </>
                        ) : (
                          <>
                            <Upload className="size-8 text-muted-foreground" />
                            <span className="text-sm text-muted-foreground">
                              Click to upload or drag and drop
                            </span>
                            <span className="text-xs text-muted-foreground">CSV files only</span>
                          </>
                        )}
                      </label>
                    </div>
                  </div>
                </div>
              </StepperItem>

              <StepperItem step={5}>
                <div className="flex flex-col gap-4">
                  <div>
                    <p className="text-sm text-muted-foreground mb-4">
                      Upload a CSV file containing device and connection data. The file should include columns for device name, status, role, device type, manufacturer, model, serial, site, location, rack, position, interfaces, and cable connections.
                    </p>
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-medium">Upload CSV File</label>
                    <div className="border-2 border-dashed border-input rounded-md p-6 flex flex-col items-center justify-center gap-2">
                      <input
                        type="file"
                        accept=".csv"
                        className="hidden"
                        id="file-upload-5"
                        onChange={(e) => {
                          const file = e.target.files?.[0] || null
                          handleFileUpload(5, file)
                        }}
                      />
                      <label
                        htmlFor="file-upload-5"
                        className="cursor-pointer flex flex-col items-center gap-2"
                      >
                        {uploadedFiles[5] ? (
                          <>
                            <CheckCircle2 className="size-8 text-primary" />
                            <span className="text-sm font-medium">{uploadedFiles[5].name}</span>
                          </>
                        ) : (
                          <>
                            <Upload className="size-8 text-muted-foreground" />
                            <span className="text-sm text-muted-foreground">
                              Click to upload or drag and drop
                            </span>
                            <span className="text-xs text-muted-foreground">CSV files only</span>
                          </>
                        )}
                      </label>
                    </div>
                  </div>
                </div>
              </StepperItem>

              <div className="flex justify-between mt-6">
                <Button
                  variant="outline"
                  onClick={handlePrevious}
                  disabled={currentStep === 1}
                >
                  Previous
                </Button>
                <Button
                  variant="default"
                  onClick={handleNext}
                  disabled={currentStep === 5}
                >
                  Next
                </Button>
              </div>
            </CardContent>
          </Card>
        </StepperContent>
      </Stepper>
    </div>
  )
}

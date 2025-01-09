import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { FaEdit, FaSave, FaUserCircle } from "react-icons/fa";

export default function ProfilePage() {
  return (
    <div className="container mx-auto py-10 px-4">
      {/* Profile Header */}
      <div className="flex items-center gap-6 mb-8">
        <FaUserCircle className="text-[#134C28]" size={100} />
        <div>
          <h1 className="text-3xl font-bold text-[#134C28]">Your Profile</h1>
          <p className="text-lg text-[#669E42]">Manage your account details</p>
        </div>
      </div>
      <Separator className="mb-8" />

      {/* Profile Information */}
      <Card className="bg-[#F9FAFB] shadow-md">
        <CardHeader>
          <CardTitle className="text-[#134C28]">Personal Information</CardTitle>
        </CardHeader>
        <CardContent>
          <form className="space-y-6">
            {/* Name */}
            <div className="flex flex-col gap-1">
              <label htmlFor="name" className="text-sm text-[#1F2937]">
                Name
              </label>
              <Input
                id="name"
                placeholder="John Doe"
                className="border-[#669E42] focus:ring-[#669E42] focus:border-[#9BB53C]"
              />
            </div>
            {/* Email */}
            <div className="flex flex-col gap-1">
              <label htmlFor="email" className="text-sm text-[#1F2937]">
                Email
              </label>
              <Input
                id="email"
                type="email"
                placeholder="john.doe@example.com"
                className="border-[#669E42] focus:ring-[#669E42] focus:border-[#9BB53C]"
              />
            </div>
            {/* Phone */}
            <div className="flex flex-col gap-1">
              <label htmlFor="phone" className="text-sm text-[#1F2937]">
                Phone
              </label>
              <Input
                id="phone"
                type="tel"
                placeholder="+123 456 7890"
                className="border-[#669E42] focus:ring-[#669E42] focus:border-[#9BB53C]"
              />
            </div>
            {/* Address */}
            <div className="flex flex-col gap-1">
              <label htmlFor="address" className="text-sm text-[#1F2937]">
                Address
              </label>
              <Input
                id="address"
                placeholder="123 Nature Street, Green City"
                className="border-[#669E42] focus:ring-[#669E42] focus:border-[#9BB53C]"
              />
            </div>
            {/* Save Button */}
            <Button className="bg-[#669E42] hover:bg-[#9BB53C] text-white flex items-center gap-2">
              <FaSave />
              Save Changes
            </Button>
          </form>
        </CardContent>
      </Card>

      {/* Order History */}
      <div className="mt-10">
        <h2 className="text-2xl font-bold text-[#134C28]">Order History</h2>
        <Separator className="my-4" />
        <div className="space-y-4">
          {/* Mock Order */}
          <Card className="bg-[#F9FAFB] shadow-sm">
            <CardContent className="flex justify-between items-center">
              <div>
                <h3 className="text-lg font-medium text-[#134C28]">
                  Order #12345
                </h3>
                <p className="text-sm text-[#1F2937]">Placed on Jan 1, 2025</p>
              </div>
              <Button variant="outline" className="text-[#134C28] border-[#134C28]">
                View Details
              </Button>
            </CardContent>
          </Card>
          {/* Add more orders as needed */}
        </div>
      </div>
    </div>
  );
}

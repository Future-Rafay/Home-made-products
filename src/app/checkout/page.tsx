import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";

export default function CheckoutPage() {
  const cartItems = [
    { id: 1, name: "Desi Ghee", price: 10, quantity: 2 },
    { id: 2, name: "Honey Jar", price: 15, quantity: 1 },
  ];

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="container mx-auto py-10 px-4">
      {/* Page Title */}
      <h1 className="text-3xl font-bold text-[#134C28] mb-6">Checkout</h1>
      <Separator className="mb-8" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Shipping Information */}
        <Card className="bg-[#F9FAFB] shadow-md">
          <CardHeader>
            <CardTitle className="text-[#134C28]">Shipping Information</CardTitle>
          </CardHeader>
          <CardContent>
            <form className="space-y-6">
              <div className="flex flex-col gap-1">
                <label htmlFor="name" className="text-sm text-[#1F2937]">
                  Full Name
                </label>
                <Input
                  id="name"
                  placeholder="John Doe"
                  className="border-[#669E42] focus:ring-[#669E42] focus:border-[#9BB53C]"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="email" className="text-sm text-[#1F2937]">
                  Email Address
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="john.doe@example.com"
                  className="border-[#669E42] focus:ring-[#669E42] focus:border-[#9BB53C]"
                />
              </div>
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
              <div className="flex flex-col gap-1">
                <label htmlFor="phone" className="text-sm text-[#1F2937]">
                  Phone Number
                </label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="+123 456 7890"
                  className="border-[#669E42] focus:ring-[#669E42] focus:border-[#9BB53C]"
                />
              </div>
            </form>
          </CardContent>
        </Card>

        {/* Order Summary */}
        <Card className="bg-[#F9FAFB] shadow-md">
          <CardHeader>
            <CardTitle className="text-[#134C28]">Order Summary</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {cartItems.map((item) => (
                <div key={item.id} className="flex justify-between items-center">
                  <div>
                    <h3 className="text-lg font-medium text-[#134C28]">
                      {item.name}
                    </h3>
                    <p className="text-sm text-[#1F2937]">
                      Quantity: {item.quantity}
                    </p>
                  </div>
                  <p className="text-[#134C28]">${item.price * item.quantity}</p>
                </div>
              ))}
              <Separator />
              <div className="flex justify-between items-center font-bold text-lg text-[#134C28]">
                <span>Total</span>
                <span>${totalPrice}</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Place Order Button */}
      <div className="mt-8 text-right">
        <Button className="bg-[#669E42] hover:bg-[#9BB53C] text-white">
          Place Order
        </Button>
      </div>
    </div>
  );
}

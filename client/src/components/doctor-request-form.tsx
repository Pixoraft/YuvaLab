import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { UserPlus, Clock, MapPin, Phone } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface TestBookingFormProps {
  isOpen: boolean;
  onClose: () => void;
}

const TestBookingForm = ({ isOpen, onClose }: TestBookingFormProps) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    serviceType: "",
    preferredTime: "",
    notes: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create WhatsApp message
    const message = `🧪 *Test Booking Request*

👤 *Name:* ${formData.name}
📞 *Phone:* ${formData.phone}
📍 *Address:* ${formData.address}
🧪 *Test Type:* ${formData.serviceType}
⏰ *Preferred Time:* ${formData.preferredTime}
${formData.notes ? `📝 *Notes:* ${formData.notes}` : ""}

Please arrange home collection for the requested tests.`;

    const phone = "919888772209";
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    
    // Open WhatsApp
    window.open(url, '_blank');
    
    // Close form and show success message
    onClose();
    toast({
      title: "Request Sent!",
      description: "Your test booking request has been sent via WhatsApp. We'll contact you soon.",
    });
    
    // Reset form
    setFormData({
      name: "",
      phone: "",
      address: "",
      serviceType: "",
      preferredTime: "",
      notes: ""
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[500px] max-h-[90vh] sm:max-h-[80vh] overflow-y-auto" data-testid="doctor-request-form">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-xl">
            <UserPlus className="w-6 h-6 text-blue-600" />
            Book Test Collection
          </DialogTitle>
          <DialogDescription>
            Fill out this form to book home collection for your medical tests.
          </DialogDescription>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name *</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => handleInputChange("name", e.target.value)}
                placeholder="Enter your full name"
                required
                data-testid="input-name"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number *</Label>
              <Input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => handleInputChange("phone", e.target.value)}
                placeholder="Enter your phone number"
                required
                data-testid="input-phone"
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="address">Complete Address *</Label>
            <Textarea
              id="address"
              value={formData.address}
              onChange={(e) => handleInputChange("address", e.target.value)}
              placeholder="Enter your complete address with landmarks"
              required
              data-testid="input-address"
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="serviceType">Test Type *</Label>
              <Select value={formData.serviceType} onValueChange={(value) => handleInputChange("serviceType", value)}>
                <SelectTrigger data-testid="select-service-type">
                  <SelectValue placeholder="Select service type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="blood-test">Blood Test</SelectItem>
                  <SelectItem value="health-package">Health Package</SelectItem>
                  <SelectItem value="urine-test">Urine Test</SelectItem>
                  <SelectItem value="hormone-test">Hormone Test</SelectItem>
                  <SelectItem value="genetic-testing">Genetic Testing</SelectItem>
                  <SelectItem value="other">Other Test</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="preferredTime">Preferred Time *</Label>
              <Select value={formData.preferredTime} onValueChange={(value) => handleInputChange("preferredTime", value)}>
                <SelectTrigger data-testid="select-preferred-time">
                  <SelectValue placeholder="Select preferred time" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="morning">Morning (8AM - 12PM)</SelectItem>
                  <SelectItem value="afternoon">Afternoon (12PM - 4PM)</SelectItem>
                  <SelectItem value="evening">Evening (4PM - 8PM)</SelectItem>
                  <SelectItem value="urgent">As Soon As Possible</SelectItem>
                  <SelectItem value="tomorrow">Tomorrow</SelectItem>
                  <SelectItem value="weekend">Weekend</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="notes">Additional Notes</Label>
            <Textarea
              id="notes"
              value={formData.notes}
              onChange={(e) => handleInputChange("notes", e.target.value)}
              placeholder="Any specific test requirements or instructions..."
              data-testid="input-notes"
            />
          </div>
          
          <div className="flex flex-col sm:flex-row gap-3 pt-4">
            <Button
              type="submit"
              className="flex-1 bg-green-600 hover:bg-green-700 text-white"
              disabled={!formData.name || !formData.phone || !formData.address || !formData.serviceType || !formData.preferredTime}
              data-testid="submit-doctor-request"
            >
              <Phone className="w-4 h-4 mr-2" />
              Send WhatsApp Request
            </Button>
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              data-testid="cancel-doctor-request"
            >
              Cancel
            </Button>
          </div>
        </form>
        
        <div className="flex items-center gap-2 text-sm text-muted-foreground bg-blue-50 p-3 rounded-lg">
          <Clock className="w-4 h-4" />
          <span>Home collection available during daytime hours (7AM-8PM) across Jalandhar with 4-hour reports.</span>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default TestBookingForm;
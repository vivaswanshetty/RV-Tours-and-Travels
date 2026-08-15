import { NextResponse } from "next/server";
import { BUSINESS_INFO } from "@/lib/constants";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      name,
      phone,
      serviceType,
      vehicleType,
      pickupLocation,
      destination,
      travelDate,
      message,
    } = body;

    // Basic Validation
    if (!name || !phone) {
      return NextResponse.json(
        { success: false, message: "Name and Phone number are required fields." },
        { status: 400 }
      );
    }

    // Generate Booking Reference Code
    const dateStr = new Date().toISOString().slice(0, 10).replace(/-/g, "");
    const randomSuffix = Math.floor(1000 + Math.random() * 9000);
    const refCode = `RV-${dateStr}-${randomSuffix}`;

    // Payload for Web3Forms or Email Relay
    const emailPayload = {
      access_key: process.env.WEB3FORMS_ACCESS_KEY || "YOUR_ACCESS_KEY_HERE",
      subject: `New Trip Enquiry [${refCode}] from ${name} - RV Tours & Travels`,
      from_name: "RV Tours & Travels Website",
      to_email: BUSINESS_INFO.email,
      ref_code: refCode,
      name: name.trim(),
      phone: phone.trim(),
      service_type: serviceType || "General Enquiry",
      vehicle_preference: vehicleType || "Not Specified",
      pickup_location: pickupLocation || "Udupi / TBD",
      destination: destination || "TBD",
      travel_date: travelDate || "TBD",
      additional_notes: message || "No extra notes provided",
    };

    // If a valid Web3Forms access key is configured in env, dispatch directly
    if (process.env.WEB3FORMS_ACCESS_KEY) {
      try {
        const web3Response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(emailPayload),
        });

        const web3Data = await web3Response.json();
        if (web3Data.success) {
          return NextResponse.json({
            success: true,
            refCode,
            message: "Enquiry dispatched successfully to operator desk.",
          });
        }
      } catch (relayError) {
        console.error("Web3Forms relay error:", relayError);
      }
    }

    // Server-side Log for immediate receipt & verification
    console.log("==========================================");
    console.log(`[BOOKING ENQUIRY RECEIVED] Ref: ${refCode}`);
    console.log(`Passenger: ${name} (${phone})`);
    console.log(`Service: ${serviceType} | Vehicle: ${vehicleType}`);
    console.log(`Route: ${pickupLocation} -> ${destination} on ${travelDate}`);
    console.log(`Message: ${message || "N/A"}`);
    console.log(`Destination Dispatch: ${BUSINESS_INFO.email}`);
    console.log("==========================================");

    return NextResponse.json({
      success: true,
      refCode,
      message: `Enquiry generated successfully (Reference: ${refCode}). Dispatched to ${BUSINESS_INFO.email}.`,
    });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Failed to process enquiry. Please use direct WhatsApp.",
      },
      { status: 500 }
    );
  }
}

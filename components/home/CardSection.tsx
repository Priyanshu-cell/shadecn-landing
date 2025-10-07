import React from "react";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";

const CardSection = () => {
  return <section className="flex justify-center py-10 bg-white">
        <Card className="w-[350px] shadow-lg">
          <CardHeader>
            <CardTitle>Our Vision</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">
              We aim to create beautiful, functional, and reusable UI components
              powered by shadcn/ui.
            </p>
          </CardContent>
        </Card>
      </section>;
};

export default CardSection;

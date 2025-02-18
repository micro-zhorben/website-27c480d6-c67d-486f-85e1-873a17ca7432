import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Typography } from "@/components/ui/typography";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";

const formSchema = z.object({
  roastLevel: z.string(),
  flavorIntensity: z.array(z.number()).min(1),
  brewMethod: z.string(),
});

interface PreferenceFormProps {
  onSubmit: (values: z.infer<typeof formSchema>) => void;
}

export function PreferenceForm({ onSubmit }: PreferenceFormProps) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      roastLevel: "",
      flavorIntensity: [5],
      brewMethod: "",
    },
  });

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <Typography.H2>Coffee Preferences</Typography.H2>
        
        <FormField
          control={form.control}
          name="roastLevel"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Roast Level</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select roast level" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="light">Light Roast</SelectItem>
                  <SelectItem value="medium">Medium Roast</SelectItem>
                  <SelectItem value="dark">Dark Roast</SelectItem>
                </SelectContent>
              </Select>
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="flavorIntensity"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Flavor Intensity</FormLabel>
              <FormControl>
                <Slider
                  min={1}
                  max={10}
                  step={1}
                  value={field.value}
                  onValueChange={field.onChange}
                  className="py-4"
                />
              </FormControl>
              <FormDescription>
                Slide to adjust your preferred flavor intensity
              </FormDescription>
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="brewMethod"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Preferred Brewing Method</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select brewing method" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="espresso">Espresso</SelectItem>
                  <SelectItem value="drip">Drip Coffee</SelectItem>
                  <SelectItem value="french">French Press</SelectItem>
                  <SelectItem value="pour">Pour Over</SelectItem>
                </SelectContent>
              </Select>
            </FormItem>
          )}
        />

        <Button type="submit" className="w-full">Get Recommendations</Button>
      </form>
    </Form>
  );
}
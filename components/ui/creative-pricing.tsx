import { Button } from "@/components/ui/button";
import { Check, Pencil, Star, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

interface PricingTier {
    name: string;
    icon: React.ReactNode;
    price: number;
    description: string;
    features: string[];
    popular?: boolean;
    color: string;
}

function CreativePricing({
    tag = "Pricing",
    title = "Make Short Videos That Pop",
    description = "Edit, enhance, and go viral in minutes",
    tiers,
}: {
    tag?: string;
    title?: string;
    description?: string;
    tiers: PricingTier[];
}) {
    return (
        <div className="w-full max-w-6xl mx-auto px-4">
            <div className="text-center space-y-4 sm:space-y-6 mb-10 sm:mb-16">
                <div className="text-lg sm:text-xl text-blue-500 rotate-[-1deg]">
                    {tag}
                </div>
                <div className="relative">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-zinc-900 dark:text-white rotate-[-1deg]">
                        {title}
                        <div className="absolute -right-12 top-0 text-amber-500 rotate-12">
                            ✨
                        </div>
                        <div className="absolute -left-8 bottom-0 text-blue-500 -rotate-12">
                            ⭐️
                        </div>
                    </h2>
                    <div
                        className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-32 sm:w-44 h-3 bg-blue-500/20 
                        rotate-[-1deg] rounded-full blur-sm"
                    />
                </div>
                <p className="text-lg sm:text-xl text-zinc-600 dark:text-zinc-400 rotate-[-1deg]">
                    {description}
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {tiers.map((tier, index) => (
                    <div
                        key={tier.name}
                        className={cn(
                            "relative group",
                            "transition-all duration-300",
                            index === 0 && "rotate-[-1deg]",
                            index === 1 && "rotate-[1deg]",
                            index === 2 && "rotate-[-2deg]"
                        )}
                    >
                        <div
                            className={cn(
                                "absolute inset-0 bg-white dark:bg-zinc-900",
                                "border-2 border-zinc-900 dark:border-white",
                                "rounded-lg shadow-[4px_4px_0px_0px] shadow-zinc-900 dark:shadow-white",
                                "transition-all duration-300",
                                "group-hover:shadow-[8px_8px_0px_0px]",
                                "group-hover:translate-x-[-4px]",
                                "group-hover:translate-y-[-4px]"
                            )}
                        />

                        <div className="relative p-4 sm:p-6">
                            {tier.popular && (
                                <div
                                    className="absolute -top-2 -right-2 bg-amber-400 text-zinc-900 
                                    px-2 sm:px-3 py-0.5 sm:py-1 rounded-full rotate-12 text-xs sm:text-sm border-2 border-zinc-900"
                                >
                                    Popular!
                                </div>
                            )}

                            <div className="mb-4 sm:mb-6">
                                <div
                                    className={cn(
                                        "w-10 h-10 sm:w-12 sm:h-12 rounded-full mb-3 sm:mb-4",
                                        "flex items-center justify-center",
                                        "border-2 border-zinc-900 dark:border-white",
                                        `text-${tier.color}-500`
                                    )}
                                >
                                    {tier.icon}
                                </div>
                                <h3 className="text-xl sm:text-2xl text-zinc-900 dark:text-white">
                                    {tier.name}
                                </h3>
                                <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400">
                                    {tier.description}
                                </p>
                            </div>

                            {/* Price */}
                            <div className="mb-4 sm:mb-6">
                                <span className="text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-white">
                                    ₹{tier.price}
                                </span>
                                <span className="text-zinc-600 dark:text-zinc-400">
                                    /month
                                </span>
                            </div>

                            <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                                {tier.features.map((feature) => (
                                    <div
                                        key={feature}
                                        className="flex items-center gap-2 sm:gap-3"
                                    >
                                        <div
                                            className="w-4 h-4 sm:w-5 sm:h-5 rounded-full border-2 border-zinc-900 
                                            dark:border-white flex items-center justify-center"
                                        >
                                            <Check className="w-2 h-2 sm:w-3 sm:h-3" />
                                        </div>
                                        <span className="text-sm sm:text-lg text-zinc-900 dark:text-white">
                                            {feature}
                                        </span>
                                    </div>
                                ))}
                            </div>

                            <Button
                                className={cn(
                                    "w-full h-10 sm:h-12 text-base sm:text-lg relative",
                                    "border-2 border-zinc-900 dark:border-white",
                                    "transition-all duration-300",
                                    "shadow-[4px_4px_0px_0px] shadow-zinc-900 dark:shadow-white",
                                    "hover:shadow-[6px_6px_0px_0px]",
                                    "hover:translate-x-[-2px] hover:translate-y-[-2px]",
                                    tier.popular
                                        ? [
                                              "bg-amber-400 text-zinc-900",
                                              "hover:bg-amber-300",
                                              "active:bg-amber-400",
                                              "dark:hover:bg-amber-300",
                                              "dark:active:bg-amber-400",
                                          ]
                                        : [
                                              "bg-zinc-50 dark:bg-zinc-800",
                                              "text-zinc-900 dark:text-white",
                                              "hover:bg-white dark:hover:bg-zinc-700",
                                              "active:bg-zinc-50 dark:active:bg-zinc-800",
                                          ]
                                )}
                            >
                                Get Started
                            </Button>
                        </div>
                    </div>
                ))}
            </div>
            <div className="absolute -z-10 inset-0 overflow-hidden">
                <div className="absolute top-40 left-20 text-4xl rotate-12">
                    ✎
                </div>
                <div className="absolute bottom-40 right-20 text-4xl -rotate-12">
                    ✏️
                </div>
            </div>
        </div>
    );
}

export { CreativePricing };
export type { PricingTier }; 
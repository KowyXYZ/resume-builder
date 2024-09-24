import { InView } from '@/components/core/in-view';
import ColoredLights from './ColoredLights';
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Check } from "lucide-react"


export function Prices() {

  const plans = [
    {
      name: "Starter",
      price: "Free",
      description: "Perfect for trying out Ice",
      features: ["Limited projects", "1 Team member", "Basic analytics", "Basic features"],
    },
    {
      name: "Unlimited",
      price: "$199",
      description: "The ultimate kit",
      features: ["Unlimited projects", "5 Team members", "Advanced design tools", "Priority support"],
    },
    {
      name: "Enterprise",
      price: "$399",
      description: "For large-scale operations",
      features: ["Unlimited projects", "Unlimited Team members", "Custom branding", "Dedicated support team"],
    },
  ]
  
    return (
      <div className='h-full w-full overflow-hidden mt-44'>
        <div className=''> {/* Create enough space for scrolling */}
          <InView
            variants={{
              hidden: { opacity: 0, y: 100, filter: 'blur(4px)' },
              visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
            }}
            viewOptions={{ margin: '0px 0px -100px 0px' }} // Adjust margin here
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <div className='flex flex-col items-center justify-center '>

            <button className="bg-slate-800 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-lg font-semibold leading-6  text-white inline-block">
                    <span className="absolute inset-0 overflow-hidden rounded-full">
                    <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
                    </span>
                    <div className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-0.5 px-4 ring-1 ring-indigo-600/80">
                    <span>{`Pricing`}</span>
                    
                    </div>
                    <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-indigo-400 via-indgo-600 to-indigo-400 transition-opacity duration-500 group-hover:opacity-40"></span>
            </button>

            <div className='text-center mb-12'>
                    <h1 className='font-black text-[32px] '>Unlock the right plan for you.</h1>
                    <p className='text-gray-400'>Choose the best plan for you and start building your dream resume today</p>
            </div>

            <div className="container mx-auto py-10">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {plans.map((plan) => (
                  <Card key={plan.name} className={`${plan.name === 'Unlimited' ? 'border-2 border-violet-600' : ''} flex flex-col bg-transparent text-[#fff]`}>
                    <CardHeader>
                      <CardTitle className="text-2xl">{plan.name}</CardTitle>
                      <CardDescription>{plan.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <p className="text-4xl font-bold mb-4">{plan.price}</p>
                      <ul className="space-y-2">
                        {plan.features.map((feature, index) => (
                          <li key={index} className="flex items-center">
                            <Check className="mr-2 h-4 w-4 text-green-500" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Button className={`${plan.name === 'Unlimited' ? 'bg-gradient-to-r from-violet-600 to-indigo-800 text-[#fff]' : 'bg-[#fff] text-[#212121]'} w-full   `}>{plan.name === "Enterprise" ? "Contact Sales" : "Get Started"}</Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </div>
            </div>
          </InView>
        </div>
      </div>
    );
  }
  
import { InView } from '@/components/core/in-view';
import ColoredLights from './ColoredLights';
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Check } from "lucide-react"
import { InfiniteSlider } from './core/infinite-slider';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { InfiniteSliderTwo } from './core/inf-slider-two';



export function Spin({name = "Anonymous",
    handle = "anonymous",
    avatarSrc = "/placeholder.svg?height=40&width=40",
    review = "No review provided."}) {

  
  
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
                    <span>{`Our Customers`}</span>
                    
                    </div>
                    <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-indigo-400 via-indgo-600 to-indigo-400 transition-opacity duration-500 group-hover:opacity-40"></span>
            </button>

            <div className='text-center mb-12'>
                    <h1 className='font-black text-[32px] '>What people are saying</h1>
                    <p className='text-gray-400'>See how Ice empowers businesses of all sizes. Here's what real people are saying on Twitter</p>
            </div>

            <div className='flex flex-col gap-8'>

                <div className="container mx-auto ">
                <InfiniteSlider gap={12} reverse>

                    <Card className="w-full h-full max-w-md bg-transparent">
                        <CardContent className="p-4">
                            <div className="flex items-start space-x-4">
                            <Avatar className="h-10 w-10">
                                <AvatarImage src={avatarSrc} alt={name} />
                                <AvatarFallback>{name ? name.charAt(0).toUpperCase() : '?'}</AvatarFallback>
                            </Avatar>
                            <div className="flex-1 min-w-0">
                                <p className="text-sm font-medium text-slate-100 truncate">Robijas</p>
                                <p className="text-sm text-gray-500 truncate">@{handle}</p>
                                <p className="mt-1 text-sm text-gray-700 line-clamp-3">Lud si kao kurac pisem iz zatvor.</p>
                            </div>
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="w-full max-w-md bg-transparent">
                        <CardContent className="p-4">
                            <div className="flex items-start space-x-4">
                            <Avatar className="h-10 w-10">
                                <AvatarImage src={avatarSrc} alt={name} />
                                <AvatarFallback>{name ? name.charAt(0).toUpperCase() : '?'}</AvatarFallback>
                            </Avatar>
                            <div className="flex-1 min-w-0">
                                <p className="text-sm font-medium text-slate-100 truncate">Slavoljub</p>
                                <p className="text-sm text-gray-500 truncate">@{handle}</p>
                                <p className="mt-1 text-sm text-gray-700 line-clamp-3">Sajt za stoku ekstra.</p>
                            </div>
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="w-full max-w-md bg-transparent">
                        <CardContent className="p-4">
                            <div className="flex items-start space-x-4">
                            <Avatar className="h-10 w-10">
                                <AvatarImage src={avatarSrc} alt={name} />
                                <AvatarFallback>{name ? name.charAt(0).toUpperCase() : '?'}</AvatarFallback>
                            </Avatar>
                            <div className="flex-1 min-w-0">
                                <p className="text-sm font-medium text-slate-100 truncate">Mrcina</p>
                                <p className="text-sm text-gray-500 truncate">@{handle}</p>
                                <p className="mt-1 text-sm text-gray-700 line-clamp-3">MRCINA SAM PA STA</p>
                            </div>
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="w-full max-w-md bg-transparent">
                        <CardContent className="p-4">
                            <div className="flex items-start space-x-4">
                            <Avatar className="h-10 w-10">
                                <AvatarImage src={avatarSrc} alt={name} />
                                <AvatarFallback>{name ? name.charAt(0).toUpperCase() : '?'}</AvatarFallback>
                            </Avatar>
                            <div className="flex-1 min-w-0">
                                <p className="text-sm font-medium text-slate-100 truncate">Miladin</p>
                                <p className="text-sm text-gray-500 truncate">@{handle}</p>
                                <p className="mt-1 text-sm text-gray-700 line-clamp-3">OVO JE ZAKON</p>
                            </div>
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="w-full max-w-md bg-transparent">
                        <CardContent className="p-4">
                            <div className="flex items-start space-x-4">
                            <Avatar className="h-10 w-10">
                                <AvatarImage src={avatarSrc} alt={name} />
                                <AvatarFallback>{name ? name.charAt(0).toUpperCase() : '?'}</AvatarFallback>
                            </Avatar>
                            <div className="flex-1 min-w-0">
                                <p className="text-sm font-medium text-slate-100 truncate">Lolipop</p>
                                <p className="text-sm text-gray-500 truncate">@{handle}</p>
                                <p className="mt-1 text-sm text-gray-700 line-clamp-3">Zovem se Slavisa</p>
                            </div>
                            </div>
                        </CardContent>
                    </Card>

                

                    </InfiniteSlider>
                </div>

                <div className="container mx-auto ">
                <InfiniteSliderTwo gap={12} reverse={true}>

                    <Card className="w-full max-w-md bg-transparent">
                        <CardContent className="p-4">
                            <div className="flex items-start space-x-4">
                            <Avatar className="h-10 w-10">
                                <AvatarImage src={avatarSrc} alt={name} />
                                <AvatarFallback>{name ? name.charAt(0).toUpperCase() : '?'}</AvatarFallback>
                            </Avatar>
                            <div className="flex-1 min-w-0">
                                <p className="text-sm font-medium text-slate-100 truncate">Tutuban</p>
                                <p className="text-sm text-gray-500 truncate">@{handle}</p>
                                <p className="mt-1 text-sm text-gray-700 line-clamp-3">Glup sam za ovo al dobro mi ide.</p>
                            </div>
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="w-full max-w-md bg-transparent">
                        <CardContent className="p-4">
                            <div className="flex items-start space-x-4">
                            <Avatar className="h-10 w-10">
                                <AvatarImage src={avatarSrc} alt={name} />
                                <AvatarFallback>{name ? name.charAt(0).toUpperCase() : '?'}</AvatarFallback>
                            </Avatar>
                            <div className="flex-1 min-w-0">
                                <p className="text-sm font-medium text-slate-100 truncate">Prcoguz</p>
                                <p className="text-sm text-gray-500 truncate">@{handle}</p>
                                <p className="mt-1 text-sm text-gray-700 line-clamp-3">U guzovi volim jbg</p>
                            </div>
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="w-full max-w-md bg-transparent">
                        <CardContent className="p-4">
                            <div className="flex items-start space-x-4">
                            <Avatar className="h-10 w-10">
                                <AvatarImage src={avatarSrc} alt={name} />
                                <AvatarFallback>{name ? name.charAt(0).toUpperCase() : '?'}</AvatarFallback>
                            </Avatar>
                            <div className="flex-1 min-w-0">
                                <p className="text-sm font-medium text-slate-100 truncate">Ludak na kvadrat</p>
                                <p className="text-sm text-gray-500 truncate">@{handle}</p>
                                <p className="mt-1 text-sm text-gray-700 line-clamp-3">ALOOO MATORI</p>
                            </div>
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="w-full max-w-md bg-transparent">
                        <CardContent className="p-4">
                            <div className="flex items-start space-x-4">
                            <Avatar className="h-10 w-10">
                                <AvatarImage src={avatarSrc} alt={name} />
                                <AvatarFallback>{name ? name.charAt(0).toUpperCase() : '?'}</AvatarFallback>
                            </Avatar>
                            <div className="flex-1 min-w-0">
                                <p className="text-sm font-medium text-slate-100 truncate">Brapo</p>
                                <p className="text-sm text-gray-500 truncate">@{handle}</p>
                                <p className="mt-1 text-sm text-gray-700 line-clamp-3">BRAPO MONOGOJAKO</p>
                            </div>
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="w-full max-w-md bg-transparent">
                        <CardContent className="p-4">
                            <div className="flex items-start space-x-4">
                            <Avatar className="h-10 w-10">
                                <AvatarImage src={avatarSrc} alt={name} />
                                <AvatarFallback>{name ? name.charAt(0).toUpperCase() : '?'}</AvatarFallback>
                            </Avatar>
                            <div className="flex-1 min-w-0">
                                <p className="text-sm font-medium text-slate-100 truncate">Zatucani</p>
                                <p className="text-sm text-gray-500 truncate">@{handle}</p>
                                <p className="mt-1 text-sm text-gray-700 line-clamp-3">A JEBIGAA</p>
                            </div>
                            </div>
                        </CardContent>
                    </Card>

                

                    </InfiniteSliderTwo>
                </div>

            </div>
            </div>
          </InView>
        </div>
      </div>
    );
  }
  
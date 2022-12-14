import Head from 'next/head'
import {MdExpandMore, MdAddCircleOutline} from 'react-icons/md'
import {AiOutlineHeart, AiOutlineCompass} from 'react-icons/ai'
import {BsSearch, BsThreeDots, BsBookmark} from 'react-icons/bs'
import {BiComment} from 'react-icons/bi'
import {TbSend} from 'react-icons/tb'
import {HiOutlineHome} from 'react-icons/hi'
import {RiMessengerLine} from 'react-icons/ri'
import Image from 'next/image'
import deved from '../public/dev-ed-wave.png'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="z-0 max-w-lg mx-auto">
        <section className="flex flex-row items-center justify-between mx-auto max-h-screen p-3 border-b border-gray-300 sticky bg-white w-full z-10 top-0">
          <ul className="flex flex-row items-center mx-2">
            <li>
              <h1 className="text-2xl">Instagram</h1>
            </li>
            <li>
              <MdExpandMore className="text-2xl text-gray-600"/>
            </li>
          </ul>
          <div className="grow mx-2">
            <label htmlFor="" className="relative block">
              <BsSearch className="pointer-events-none w-4 h-4 absolute top-1/2 transform -translate-y-1/2 left-3 text-gray-400" />
              <input type="text" name="searchBar" id="searchBar" placeholder="Search" width="100%" className="rounded-md w-full pl-9 py-1 border bg-gray-200"/>
            </label>
          </div>
          <AiOutlineHeart className="mx-2 text-2xl"/>
        </section>

        <section className="mx-4 flex flex-row box-border mt-5 border rounded-md border-gray-200 overflow-auto">
          <div className="my-3 mx-2 bg-white cursor-pointer">
            <div className="w-16 h-16 relative rounded-full overflow-hidden border-2 border-black">
              <Image src={deved} layout="fill" objectFit="cover" alt="deved"/>
            </div>
            <h3 className="text-center text-sm text-gray-400">My Story</h3>
          </div>
          <div className="my-3 mx-2 bg-white cursor-pointer">
            <div className="w-16 h-16 relative rounded-full overflow-hidden border-2 border-black">
              <Image src={deved} layout="fill" objectFit="cover" alt="deved"/>
            </div>
            <h3 className="text-center text-sm">My Story</h3>
          </div>
          <div className="my-3 mx-2 bg-white cursor-pointer">
            <div className="w-16 h-16 relative rounded-full overflow-hidden border-2 border-black">
              <Image src={deved} layout="fill" objectFit="cover" alt="deved"/>
            </div>
            <h3 className="text-center text-sm">My Story</h3>
          </div>
          <div className="my-3 mx-2 bg-white cursor-pointer">
            <div className="w-16 h-16 relative rounded-full overflow-hidden border-2 border-black">
              <Image src={deved} layout="fill" objectFit="cover" alt="deved"/>
            </div>
            <h3 className="text-center text-sm">My Story</h3>
          </div>
          <div className="my-3 mx-2 bg-white cursor-pointer">
            <div className="w-16 h-16 relative rounded-full overflow-hidden border-2 border-black">
              <Image src={deved} layout="fill" objectFit="cover" alt="deved"/>
            </div>
            <h3 className="text-center text-sm">My Story</h3>
          </div>
          <div className="my-3 mx-2 bg-white cursor-pointer">
            <div className="w-16 h-16 relative rounded-full overflow-hidden border-2 border-black">
              <Image src={deved} layout="fill" objectFit="cover" alt="deved"/>
            </div>
            <h3 className="text-center text-sm">My Story</h3>
          </div>
          <div className="my-3 mx-2 bg-white cursor-pointer">
            <div className="w-16 h-16 relative rounded-full overflow-hidden border-2 border-black">
              <Image src={deved} layout="fill" objectFit="cover" alt="deved"/>
            </div>
            <h3 className="text-center text-sm">My Story</h3>
          </div>
        </section>

        <section>
          <div className="flex flex-col gap-2 mx-4 box-border mt-5 border rounded-md border-gray-200">
            <div>
              <ul className="flex flex-row justify-between items-center mt-2 ">
                <li className="mx-2">
                  <div className="w-8 h-8 relative rounded-full overflow-hidden border-2 border-black">
                    <Image src={deved} layout="fill" objectFit="cover" alt="deved"/>
                  </div>
                </li>
                <li className="grow mx-2">
                  <ul>
                    <li className="font-medium leading-none">infia_techno</li>
                    <li classname="text-sm">Kata sandi</li>
                  </ul>
                </li>
                <li className="mx-4 text-xl text-gray-700">
                  <BsThreeDots />
                </li>
              </ul>
            </div>
            <div className="bg-teal-300">
              <Image src={deved} />
            </div>
            <div className="flex flex-row justify-between items-center text-2xl mx-2">
              <ul className="flex flex-row gap-5">
                <li className="hover:text-gray-500 cursor-pointer"><AiOutlineHeart /></li>
                <li className="hover:text-gray-500 cursor-pointer"><BiComment /></li>
                <li className="hover:text-gray-500 cursor-pointer"><TbSend /></li>
              </ul>
              <ul>
                <li className="hover:text-gray-500 cursor-pointer"><BsBookmark /></li>
              </ul>
            </div>
            <div className="mx-2 font-medium text-sm">
              <p>342 likes</p>
            </div>
            <div className="mx-2 text-sm">
              <p><span className="font-medium">infia_techno</span><span> </span>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo magnam aliquid deserunt libero incidunt ad omnis doloremque! Iusto culpa nobis dolor, rem at voluptatem vel. Earum, delectus. Maxime eveniet suscipit ipsa id est! Laboriosam minima, vel libero sequi qui praesentium.</p>
            </div>
            <div className="mx-2 text-sm text-gray-500 cursor-pointer">
              <p>View all 156 comments</p>
            </div>
            <div className="mx-2 text-sm flex flex-row gap-2 mb-3">
              <p className="text-gray-400">1 DAY AGO</p>
              <p className="font-medium">See translation</p>
            </div>
          </div>
          <div className="flex flex-col gap-2 mx-4 box-border mt-5 border rounded-md border-gray-200">
            <div>
              <ul className="flex flex-row justify-between items-center mt-2 ">
                <li className="mx-2">
                  <div className="w-8 h-8 relative rounded-full overflow-hidden border-2 border-black">
                    <Image src={deved} layout="fill" objectFit="cover" alt="deved"/>
                  </div>
                </li>
                <li className="grow mx-2">
                  <ul>
                    <li className="font-medium leading-none">infia_techno</li>
                    <li classname="text-sm">Kata sandi</li>
                  </ul>
                </li>
                <li className="mx-4 text-xl text-gray-700">
                  <BsThreeDots />
                </li>
              </ul>
            </div>
            <div className="bg-teal-300">
              <Image src={deved} />
            </div>
            <div className="flex flex-row justify-between items-center text-2xl mx-2">
              <ul className="flex flex-row gap-5">
                <li className="hover:text-gray-500 cursor-pointer"><AiOutlineHeart /></li>
                <li className="hover:text-gray-500 cursor-pointer"><BiComment /></li>
                <li className="hover:text-gray-500 cursor-pointer"><TbSend /></li>
              </ul>
              <ul>
                <li className="hover:text-gray-500 cursor-pointer"><BsBookmark /></li>
              </ul>
            </div>
            <div className="mx-2 font-medium text-sm">
              <p>342 likes</p>
            </div>
            <div className="mx-2 text-sm">
              <p><span className="font-medium">infia_techno</span><span> </span>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo magnam aliquid deserunt libero incidunt ad omnis doloremque! Iusto culpa nobis dolor, rem at voluptatem vel. Earum, delectus. Maxime eveniet suscipit ipsa id est! Laboriosam minima, vel libero sequi qui praesentium.</p>
            </div>
            <div className="mx-2 text-sm text-gray-500 cursor-pointer">
              <p>View all 156 comments</p>
            </div>
            <div className="mx-2 text-sm flex flex-row gap-2 mb-3">
              <p className="text-gray-400">1 DAY AGO</p>
              <p className="font-medium">See translation</p>
            </div>
          </div>
          <div className="flex flex-col gap-2 mx-4 box-border mt-5 border rounded-md border-gray-200">
            <div>
              <ul className="flex flex-row justify-between items-center mt-2 ">
                <li className="mx-2">
                  <div className="w-8 h-8 relative rounded-full overflow-hidden border-2 border-black">
                    <Image src={deved} layout="fill" objectFit="cover" alt="deved"/>
                  </div>
                </li>
                <li className="grow mx-2">
                  <ul>
                    <li className="font-medium leading-none">infia_techno</li>
                    <li classname="text-sm">Kata sandi</li>
                  </ul>
                </li>
                <li className="mx-4 text-xl text-gray-700">
                  <BsThreeDots />
                </li>
              </ul>
            </div>
            <div className="bg-teal-300">
              <Image src={deved} />
            </div>
            <div className="flex flex-row justify-between items-center text-2xl mx-2">
              <ul className="flex flex-row gap-5">
                <li className="hover:text-gray-500 cursor-pointer"><AiOutlineHeart /></li>
                <li className="hover:text-gray-500 cursor-pointer"><BiComment /></li>
                <li className="hover:text-gray-500 cursor-pointer"><TbSend /></li>
              </ul>
              <ul>
                <li className="hover:text-gray-500 cursor-pointer"><BsBookmark /></li>
              </ul>
            </div>
            <div className="mx-2 font-medium text-sm">
              <p>342 likes</p>
            </div>
            <div className="mx-2 text-sm">
              <p><span className="font-medium">infia_techno</span><span> </span>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo magnam aliquid deserunt libero incidunt ad omnis doloremque! Iusto culpa nobis dolor, rem at voluptatem vel. Earum, delectus. Maxime eveniet suscipit ipsa id est! Laboriosam minima, vel libero sequi qui praesentium.</p>
            </div>
            <div className="mx-2 text-sm text-gray-500 cursor-pointer">
              <p>View all 156 comments</p>
            </div>
            <div className="mx-2 text-sm flex flex-row gap-2 mb-3">
              <p className="text-gray-400">1 DAY AGO</p>
              <p className="font-medium">See translation</p>
            </div>
          </div>
          <div className="flex flex-col gap-2 mx-4 box-border mt-5 border rounded-md border-gray-200">
            <div>
              <ul className="flex flex-row justify-between items-center mt-2 ">
                <li className="mx-2">
                  <div className="w-8 h-8 relative rounded-full overflow-hidden border-2 border-black">
                    <Image src={deved} layout="fill" objectFit="cover" alt="deved"/>
                  </div>
                </li>
                <li className="grow mx-2">
                  <ul>
                    <li className="font-medium leading-none">infia_techno</li>
                    <li classname="text-sm">Kata sandi</li>
                  </ul>
                </li>
                <li className="mx-4 text-xl text-gray-700">
                  <BsThreeDots />
                </li>
              </ul>
            </div>
            <div className="bg-teal-300">
              <Image src={deved} />
            </div>
            <div className="flex flex-row justify-between items-center text-2xl mx-2">
              <ul className="flex flex-row gap-5">
                <li className="hover:text-gray-500 cursor-pointer"><AiOutlineHeart /></li>
                <li className="hover:text-gray-500 cursor-pointer"><BiComment /></li>
                <li className="hover:text-gray-500 cursor-pointer"><TbSend /></li>
              </ul>
              <ul>
                <li className="hover:text-gray-500 cursor-pointer"><BsBookmark /></li>
              </ul>
            </div>
            <div className="mx-2 font-medium text-sm">
              <p>342 likes</p>
            </div>
            <div className="mx-2 text-sm">
              <p><span className="font-medium">infia_techno</span><span> </span>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo magnam aliquid deserunt libero incidunt ad omnis doloremque! Iusto culpa nobis dolor, rem at voluptatem vel. Earum, delectus. Maxime eveniet suscipit ipsa id est! Laboriosam minima, vel libero sequi qui praesentium.</p>
            </div>
            <div className="mx-2 text-sm text-gray-500 cursor-pointer">
              <p>View all 156 comments</p>
            </div>
            <div className="mx-2 text-sm flex flex-row gap-2 mb-3">
              <p className="text-gray-400">1 DAY AGO</p>
              <p className="font-medium">See translation</p>
            </div>
          </div>
          <div className="flex flex-col gap-2 mx-4 box-border mt-5 border rounded-md border-gray-200">
            <div>
              <ul className="flex flex-row justify-between items-center mt-2 ">
                <li className="mx-2">
                  <div className="w-8 h-8 relative rounded-full overflow-hidden border-2 border-black">
                    <Image src={deved} layout="fill" objectFit="cover" alt="deved"/>
                  </div>
                </li>
                <li className="grow mx-2">
                  <ul>
                    <li className="font-medium leading-none">infia_techno</li>
                    <li classname="text-sm">Kata sandi</li>
                  </ul>
                </li>
                <li className="mx-4 text-xl text-gray-700">
                  <BsThreeDots />
                </li>
              </ul>
            </div>
            <div className="bg-teal-300">
              <Image src={deved} />
            </div>
            <div className="flex flex-row justify-between items-center text-2xl mx-2">
              <ul className="flex flex-row gap-5">
                <li className="hover:text-gray-500 cursor-pointer"><AiOutlineHeart /></li>
                <li className="hover:text-gray-500 cursor-pointer"><BiComment /></li>
                <li className="hover:text-gray-500 cursor-pointer"><TbSend /></li>
              </ul>
              <ul>
                <li className="hover:text-gray-500 cursor-pointer"><BsBookmark /></li>
              </ul>
            </div>
            <div className="mx-2 font-medium text-sm">
              <p>342 likes</p>
            </div>
            <div className="mx-2 text-sm">
              <p><span className="font-medium">infia_techno</span><span> </span>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo magnam aliquid deserunt libero incidunt ad omnis doloremque! Iusto culpa nobis dolor, rem at voluptatem vel. Earum, delectus. Maxime eveniet suscipit ipsa id est! Laboriosam minima, vel libero sequi qui praesentium.</p>
            </div>
            <div className="mx-2 text-sm text-gray-500 cursor-pointer">
              <p>View all 156 comments</p>
            </div>
            <div className="mx-2 text-sm flex flex-row gap-2 mb-3">
              <p className="text-gray-400">1 DAY AGO</p>
              <p className="font-medium">See translation</p>
            </div>
          </div>
        </section>

        <footer className="flex flex-row items-center justify-between mx-auto max-h-screen p-3 border-t border-gray-300 sticky bg-white w-full z-10 bottom-0">
          <HiOutlineHome className="text-3xl"/>
          <AiOutlineCompass className="text-3xl"/>
          <MdAddCircleOutline className="text-3xl"/>
          <RiMessengerLine className="text-3xl"/>
          <div className="w-8 h-8 relative rounded-full overflow-hidden border-2 border-black">
            <Image src={deved} layout="fill" objectFit="cover" alt="deved"/>
          </div>
        </footer>
      </main>
    </div>
  )
}

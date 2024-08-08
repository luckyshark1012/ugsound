'use client'

import { useState } from 'react'
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from '@headlessui/react'
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'
import { Link, useNavigate } from 'react-router-dom'

const products = [
  { name: 'Analytics', description: 'Get a better understanding of your traffic', href: '#', icon: ChartPieIcon },
  { name: 'Engagement', description: 'Speak directly to your customers', href: '#', icon: CursorArrowRaysIcon },
  { name: 'Security', description: 'Your customers’ data will be safe and secure', href: '#', icon: FingerPrintIcon },
  { name: 'Integrations', description: 'Connect with third-party tools', href: '#', icon: SquaresPlusIcon },
  { name: 'Automations', description: 'Build strategic funnels that will convert', href: '#', icon: ArrowPathIcon },
]
const callsToAction = [
  { name: 'Watch demo', href: '#', icon: PlayCircleIcon },
  { name: 'Contact sales', href: '#', icon: PhoneIcon },
]

const HeaderComponent = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/signin');
  };

  return (
    <header className="sticky top-0 bg-white" style={{ zIndex: 10 }}>
      <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
        <div className="flex lg:flex-1">
          <Link to='/home' className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img alt="" src="https://cdn-icons-png.flaticon.com/128/2753/2753289.png" className="h-8 w-auto" />
          </Link>
        </div>
        <PopoverGroup className="hidden lg:flex lg:gap-x-8">
          <Link to='/home' className="text-sm font-semibold leading-6 text-gray-900 hover:text-indigo-600" style={{ color: document.location.pathname.includes('home') && '#9300ff' }}>
            Home
          </Link>
          <Link to='/music_store' className="text-sm font-semibold leading-6 text-gray-900 hover:text-indigo-600" style={{ color: document.location.pathname.includes('music_store') && '#9300ff' }}>
            Music Store
          </Link>
          <Link to='/artist_profiles' className="text-sm font-semibold leading-6 text-gray-900 hover:text-indigo-600" style={{ color: document.location.pathname.includes('artist_profiles') && '#9300ff' }}>
            Artist Profiles
          </Link>
          <Link to='/broadcast_monitoring' className="text-sm font-semibold leading-6 text-gray-900 hover:text-indigo-600" style={{ color: document.location.pathname.includes('broadcast_monitoring') && '#9300ff' }}>
            Broadcast Monitoring
          </Link>
          <Link to='/top_songs' className="text-sm font-semibold leading-6 text-gray-900 hover:text-indigo-600" style={{ color: document.location.pathname.includes('top_songs') && '#9300ff' }}>
            Top Songs
          </Link>
          <Link to='/about' className="text-sm font-semibold leading-6 text-gray-900 hover:text-indigo-600" style={{ color: document.location.pathname.includes('about') && '#9300ff' }}>
            About Us
          </Link>
          <Link to='/contact_us' className="text-sm font-semibold leading-6 text-gray-900 hover:text-indigo-600" style={{ color: document.location.pathname.includes('contact_us') && '#9300ff' }}>
            Contact Us
          </Link>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <Link to='/signin' className="text-sm font-semibold leading-6 text-gray-900 hover:text-indigo-600">
              Log in <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </PopoverGroup>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="false" className="h-6 w-6" />
          </button>
        </div>
      </nav>
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                alt=""
                src="https://cdn-icons-png.flaticon.com/128/2753/2753289.png"
                className="h-8 w-auto"
              />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Disclosure as="div" className="-mx-3">
                  <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                    Product
                    <ChevronDownIcon aria-hidden="true" className="h-5 w-5 flex-none group-data-[open]:rotate-180" />
                  </DisclosureButton>
                  <DisclosurePanel className="mt-2 space-y-2">
                    {[...products, ...callsToAction].map((item) => (
                      <DisclosureButton
                        key={item.name}
                        as="a"
                        href={item.href}
                        className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                      >
                        {item.name}
                      </DisclosureButton>
                    ))}
                  </DisclosurePanel>
                </Disclosure>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Features
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Marketplace
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Company
                </a>
              </div>
              <div className="py-6">
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  onClick={() => handleLoginClick()}
                >
                  Log in
                </a>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  )
}

export default HeaderComponent;
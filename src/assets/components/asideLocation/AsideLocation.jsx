import { Disclosure } from '@headlessui/react'

const AsideLocation = ({ locations, setLocation }) => {
    return (
        <aside className="[grid-area:aside] px-5 flex flex-col self-center h-95 overflow-hidden overflow-y-auto gap-4 py-3 w-63">
            <div className='text-center'>
                <h2 className="text-[22px] pb-1">Filters</h2>
            </div>
            <Disclosure>
                {({ open }) => (
                    <div className="border-b border-white/20 py-1">
                        <Disclosure.Button className="flex justify-between items-center w-full py-3 text-white font-bold cursor-pointer">
                            Locations
                            <span>{open ? '▲' : '▼'}</span>
                        </Disclosure.Button>

                        <Disclosure.Panel className="flex flex-col gap-2">
                            {locations?.map(location => (
                                <button key={location.id} onClick={() => setLocation(location)} className="text-left text-white/80 hover:text-white cursor-pointer">{location.name}</button>
                            ))}
                        </Disclosure.Panel>
                    </div>
                )}
            </Disclosure>
        </aside>
    )
}

export default AsideLocation
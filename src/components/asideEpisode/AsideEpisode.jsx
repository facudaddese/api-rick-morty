import { Disclosure } from '@headlessui/react'

const AsideEpisode = ({ episodes, setEpisode }) => {
    return (
        <aside className="[grid-area:aside] px-5 flex flex-col self-center h-95 overflow-hidden overflow-y-auto gap-4 py-3 w-63 aside-episode">
            <div className='text-center'>
                <h2 className="text-[22px] pb-1">Filters</h2>
            </div>
            <Disclosure>
                {({ open }) => (
                    <div className="border-b border-white/20 py-1">
                        <Disclosure.Button className="flex justify-between items-center w-full py-3 text-white font-bold cursor-pointer">
                            Episodes
                            <span>{open ? '▲' : '▼'}</span>
                        </Disclosure.Button>
                        <Disclosure.Panel className="flex flex-col gap-2">
                            {episodes?.map(ep => (
                                <button key={ep.id} onClick={() => setEpisode(ep)} className="text-left text-white/80 hover:text-white cursor-pointer">Episode {ep.id}</button>
                            ))}
                        </Disclosure.Panel>
                    </div>
                )}
            </Disclosure>
        </aside>
    )
}

export default AsideEpisode
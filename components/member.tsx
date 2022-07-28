import React, { FC } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import margeloFaces_marc from '../assets/team/margelo_faces_marc.svg'
import margeloFaces_janic from '../assets/team/margelo_faces_janic.svg'
import margeloFaces_christoph from '../assets/team/margelo_faces_christoph.svg'
import margeloFaces_mo from '../assets/team/margelo_faces_mo.svg'
import margeloFaces_szymon from '../assets/team/margelo_faces_szymon.svg'
import margeloFaces_thomas from '../assets/team/margelo_faces_thomas.svg'

interface Props {
    id: string
    name: string
    socialId: string
    link: string
}
const Member: FC<Props> = ({ id, name, socialId, link }) => {

    const setImageSrc = () => {
        switch(id) {
            case 'marc':
                return margeloFaces_marc
            case 'szymon':
                return margeloFaces_szymon
            case 'mo':
                return margeloFaces_mo
            case 'christoph':
                return margeloFaces_christoph
            case 'janic':
                return margeloFaces_janic
            case 'thomas':
                return margeloFaces_thomas
        }
    }
    return (
        <div>
            <Image 
                src={setImageSrc()}
                alt={name}
                width={1366}
                height={1555}
            />
            <div className="text-2xl xl:text-3xl">{name}</div>
            <div className="text-xl">
                <Link href={link}>
                    <a target="_blank">{socialId}</a>
                </Link>
            </div>
        </div>
    )
}


export default Member
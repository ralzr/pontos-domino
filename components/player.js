import { useState } from 'react'
import styles from '../styles/Home.module.css'
import Image from 'next/image'

export default function Player({name}) {
    const [state, setState] = useState({
        pts: 0,
        ptsTemp: 0,
        ptsList: [0]
    })

    const handleChange = e => {
        let copy = {...state}
        copy.ptsTemp = +e.target.value
        setState(copy)
    }

    const handleClick = e => {
        let copy = {...state}
        copy.pts = +copy.ptsTemp + copy.pts
        copy.ptsTemp = 0
        copy.ptsList = [...copy.ptsList, copy.pts]
        setState(copy)
    }

    return (
        <div className={styles.player}>
            <p>{name}</p>
            <div className={styles.playerImg}>
                {
                    state.pts >= 0 && state.pts < 15 && <Image src="/images/smiling.png" width={64} height={64}></Image>
                }
                {
                    state.pts >= 15 && state.pts < 30 && <Image src="/images/light_smile.png" width={64} height={64}></Image>
                }
                {
                    state.pts >= 30 && state.pts < 45 && <Image src="/images/upside.png" width={64} height={64}></Image>
                }
                {
                    state.pts >= 45 && state.pts < 60 && <Image src="/images/pensive.png" width={64} height={64}></Image>
                }
                {
                    state.pts >= 60 && state.pts < 75 && <Image src="/images/crying.png" width={64} height={64}></Image>
                }
                {
                    state.pts >= 75 && state.pts < 100 && <Image src="/images/screaming.png" width={64} height={64}></Image>
                }
                {
                    state.pts >= 100 && <Image src="/images/exploded.png" width={64} height={64}></Image>
                }
            </div>
            <div className={styles.ptsContainer}>
                <input className={styles.ptsInput} name="ptsTemp" value={state.ptsTemp} onChange={handleChange} min="0" type="number" />
                <button className={styles.ptsBtn} aria-label="pts" onClick={handleClick}>+</button>
            </div>
            <br />
            <div className={styles.ptsList}>
                {
                    state.ptsList.map(pts => {
                        return (
                            <p key={`pts-${pts}-${Date.now()}`}>
                                {pts}
                            </p>
                        )
                    })
                }
            </div>
        </div>
    )
}
import React from 'react'

export default function Filters() {
    const arr=['All','Movies','Music','Apple','Gadgets','Live','Computer','Computer Science','Programming','All','Movies','Music','Apple','Gadgets','Live','Computer','Computer Science','Programming']
  return (
    <>
    <div className='filt'>
        {
            arr.map(f1=>
            (<button className='fb1'>{f1}</button>))
        }
    </div>
    </>
  )
}

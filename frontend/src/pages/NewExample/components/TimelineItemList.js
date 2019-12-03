import React from 'react';

export default function TimelineItemList({itemList, setTimelineItems}) {
    return (
        <React.Fragment>
            <div className="list-group">
                {
                    (itemList && itemList.length > 0) ? itemList.map((item, index) => (
                        <div className="list-group-item list-group-item-action flex-column align-items-start">
                            <div className="d-flex w-100 justify-content-between">
                                <h5 className="mb-1">{item.title}</h5>
                                <button type="button" className="close" aria-label="Close" onClick={()=>setTimelineItems(itemList.filter((val, ind) => ind !== index))}>
                                    <span aria-hidden="true">&times;</span>
                                </button>
                                {/* <small className="">12345</small> */}
                            </div>
                            <p className="mb-1">{item.description}</p>
                            <small className="d-none">Donec id elit non mi porta.</small>
                        </div>
                    )) : ''
                }
            </div>
        </React.Fragment>
    )
}
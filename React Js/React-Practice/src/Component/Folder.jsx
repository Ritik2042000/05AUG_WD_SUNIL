import React, { useState } from 'react';
import './folder.css'

const Folder = ({ data, handleInsertNode }) => {
    // console.log(data);
    const [expand, setExpand] = useState(false)
    const [showInput, setShowInput] = useState({
        visible: false,
        isFolder: null,
    })

    const handleNewFolder = (e, isFolder) => {
        e.stopPropagation();
        setExpand(true)
        setShowInput({
            visible: true,
            isFolder
        })
    }

    const onAddFolder = (e) => {
        if (e.keyCode === 13 && e.target.value) {
            handleInsertNode(data.id, e.target.value, showInput.isFolder)
            setShowInput({ ...showInput, visible: false });
        }
    }
    if (data.isFolder) {
        return (
            <div style={{ margin: 10 }}>
                <div className='folder' onClick={() => setExpand(!expand)}>
                    <span>📁{data.name}</span>
                    <div>
                        <button onClick={(e) => handleNewFolder(e, true)}>📂Folder+</button>
                        <button onClick={(e) => handleNewFolder(e, false)}>📝File +</button>
                    </div>
                </div>
                <div style={{ display: expand ? 'block' : 'none', paddingLeft: 25 }}>
                    {showInput.visible && (<div className="inputContainer">
                        <span>{showInput.isFolder ? '📁' : '📄'}</span>
                        <input type='text'
                            onKeyDown={onAddFolder}
                            className='inputContainer__input' onBlur={() => setShowInput({ ...setShowInput, visible: false })} autoFocus />
                    </div>
                    )}

                    {data.items.map((curElem) => {
                        return <Folder handleInsertNode={handleInsertNode} data={curElem} key={curElem.id} />
                    })}
                </div>

            </div>
        );
    } else {
        return <span className='file'>📄{data.name}</span>
    }
};

export default Folder;
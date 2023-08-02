import React, { useState } from 'react';
import explorer from './data/folderData';
import Folder from './Component/Folder';
import useTraverseTree from './hooks/use-traverse-tree';

const Fileexplorer = () => {
  
  const [expolrerData,setExplorer] = useState(explorer)
  console.log(expolrerData);
   const { insertNode } = useTraverseTree()

   const handleInsertNode = (folderId,item,isFolder)=> {
    const finalTree = insertNode(expolrerData,folderId,item,isFolder)
    setExplorer(finalTree)
   }
    return (
        <div>
            <Folder data={expolrerData} handleInsertNode={handleInsertNode}/>
        </div>
    );
};

export default Fileexplorer;
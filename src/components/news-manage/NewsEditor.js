import React,{useState} from 'react'
import { Editor } from "react-draft-wysiwyg";
import { convertToRaw } from 'draft-js';
import draftToHtml from 'draftjs-to-html'
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
export default function NewsEditor(props) {
    const [editorState, setEditorState] = useState("")
    return (
        <div style={{marginTop:50}}>
               <Editor
                editorState={editorState}
                toolbarClassName="aaaaa"
                wrapperClassName="bbbbb"
                editorClassName="ccccc"
                onEditorStateChange={(editorState)=>setEditorState(editorState)}

                onBlur={()=>{
                    // console.log()

                    props.getContent(draftToHtml(convertToRaw(editorState.getCurrentContent())))
                }}
            />
        </div>
    )
}

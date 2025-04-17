"use client";

// import { uploadFiles } from "@/utils/uploadthing";

import type { BlockNoteEditor, BlockSchemaFromSpecs, PartialBlock } from "@blocknote/core";
import { BlockNoteView, useCreateBlockNote } from "@blocknote/react";
import "@blocknote/core/fonts/inter.css";
import "@blocknote/react/style.css";
import { useTheme } from "next-themes";

interface EditorProps {
  onChange: (e:any) => void;
  initialContent?: string;
  editable?: boolean;
}
// Hardcoded initial content
const parsedInitialContent: PartialBlock<BlockSchemaFromSpecs<any>>[] = [
  {
    id: "1",
    type: "paragraph",
    // content: [
    //   {
    //     text: "Welcome to the editor!",
    //     styles: {},
    //   },
    // ],
  },
  {
    id: "2",
    type: "paragraph",
    // content: [
    //   {
    //     text: "This is a second paragraph.",
    //     styles: {},
    //   },
    // ],
  },
];
const Editor: React.FC<EditorProps> = ({
  onChange,
  initialContent,
  editable = true,
}) => {
  const { resolvedTheme } = useTheme();
  const currentTheme = resolvedTheme || "light";
  const theme = currentTheme === "dark" ? "dark" : "light";
  const editor: BlockNoteEditor = useCreateBlockNote({
    initialContent: parsedInitialContent,
    uploadFile: async (file: File) => {
      // const [res] = await uploadFiles("imageUploader", { files: [file] });
      return 'res.url';
    },
  });

  return (
    <div className="-mx-[54px] my-4">
      <BlockNoteView
        editor={editor}
        editable={editable}
        theme={theme}
        sideMenu={false}
        // onChange={onChange}
      />
    </div>
  );
};

export default Editor;
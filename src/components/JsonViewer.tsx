import { useColorMode } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-json";
import "ace-builds/src-noconflict/theme-twilight";
import "ace-builds/src-noconflict/theme-xcode";

const JsonViewer = (props: any) => {
  const { colorMode, toggleColorMode } = useColorMode();
  const [srcObj, setSrcObj] = useState<any>({});
  const [isErrJson, setIsErrJson] = useState<boolean>(false);
  const onChange = (newValue) => {
    console.log("change", newValue);
  };
  useEffect(() => {
    try {
      const obj = JSON.parse(props.src);
      setIsErrJson(false);
      setSrcObj(obj);
    } catch (e) {
      setIsErrJson(true);
    }
  }, [props.src]);
  return (
    <AceEditor
      mode="json"
      theme={colorMode === "dark" ? "twilight" : "xcode"}
      onChange={onChange}
      name="UNIQUE_ID_OF_DIV"
      editorProps={{ $blockScrolling: true }}
    />
  );
};

export default JsonViewer;

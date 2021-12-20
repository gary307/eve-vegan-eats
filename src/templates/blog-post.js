import React from "react";
import { graphql } from "gatsby";
import { StructuredText } from "react-datocms";
import styled from "styled-components";

export default function BlogPost({ pageContext }) {
  const { title, slug, image, content, structuredcontent } =
    pageContext.edge.node;

  console.log({ structuredcontent });

  return (
    <div>
      <h1>{title}</h1>
      <img src={image.url} />
      {/* <div dangerouslySetInnerHTML={{ __html: content }}></div> */}
      <StructuredText
        data={structuredcontent}
        renderBlock={({ record }) => {
          switch (record.__typename) {
            case "DatoCmsImage":
              return <img src={record.image.url} />;
            default:
              return null;
          }
        }}
      />
    </div>
  );
}

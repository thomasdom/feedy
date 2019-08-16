import * as React from "react";
import { storiesOf } from "@storybook/react";
import ArticleCard from ".";

storiesOf("ArticleCard", module).add("default", () => {
  return (
    <ArticleCard
      title="So You’ve Decided To Switch Careers and Start Coding"
      url="https://www.freecodecamp.org/news/career-switcher/"
      media="https://images.unsplash.com/photo-1511376777868-611b54f68947?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjExNzczfQ"
      publicationDate="Mon, 12 Aug 2019 22:34:17 -0400"
    />
  );
});

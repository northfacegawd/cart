import React from 'react';

import { Page, PageList } from './index.style';

interface PaginatinProps {}

export default function Pagination() {
  return (
    <PageList>
      <Page>이전</Page>
      <Page>1</Page>
      <Page>2</Page>
      <Page>3</Page>
      <Page>4</Page>
      <Page>5</Page>
      <Page>다음</Page>
    </PageList>
  );
}

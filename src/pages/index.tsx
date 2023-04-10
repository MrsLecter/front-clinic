import { StyledNotificationMessage } from "@/styles/index.styles";
import { StyledContainer } from "@/components/resultsContainer/ResultsContainer.styled";
import { IResponseData, TSearchParams } from "@/types/commonTypes";
import {
  getQueryOption,
  getQueryString,
  getSearchParamsObject,
} from "@/utils/functions";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import Image from "next/image";
import ResultsContainer from "@/components/resultsContainer/ResultsContainer";

export default function Home() {
  const router = useRouter();

  const [params, setParams] = useState<{
    [key: string]: string;
  }>({
    type: "City",
    search: "",
  });

  useEffect(() => {
    if (router.isReady) {
      setParams(getSearchParamsObject(router.asPath));
    }
  }, [router.asPath]);

  const { data, loading, error } = useQuery<{
    response: IResponseData[];
  }>(getQueryString(getQueryOption(params.type as TSearchParams)), {
    variables: { input: params.search || "" },
  });

  if (router.isReady) {
    if (data) {
      const response = Object.values(data)[0];
      return (
        <>
          {!loading && !error && response && (
            <ResultsContainer data={response} />
          )}
        </>
      );
    } else {
      return (
        <StyledContainer>
          {loading && (
            <StyledNotificationMessage>
              <Image
                width={30}
                height={30}
                src="/icons/loader.gif"
                alt="search-icon.svg"
              />
              <h2>Loading...</h2>
            </StyledNotificationMessage>
          )}
          {error && (
            <StyledNotificationMessage>
              <h2>An error occured. Try again</h2>
            </StyledNotificationMessage>
          )}
        </StyledContainer>
      );
    }
  }
}

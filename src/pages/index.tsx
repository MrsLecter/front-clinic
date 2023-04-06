import Results from "@/components/results/Results";
import Search from "@/components/search/Search";
import Tabs from "@/components/tabs/Tabs";
import { IResponseData } from "@/types/commonTypes";
import { getQueryString } from "@/utils/functions";
import Image from "next/image";
import Link from "next/link";
import { useQuery } from "@apollo/client";
import { useState } from "react";
import { TSearchParams } from "@/types/commonTypes";
import { StyledHeader, StyledContainer } from "@/styles/index.styles";

export default function Home() {
  const [activeClinic, setActiveClinic] = useState<string>("");
  const [searchOption, setSearchOption] = useState<TSearchParams>("City");
  const [searchString, setSearhString] = useState<string>("");
  const { data, loading, error } = useQuery<{
    response: IResponseData[];
  }>(getQueryString({ option: searchOption }), {
    variables: { input: searchString },
  });

  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    return <h2>An error occured. Try again</h2>;
  }

  if (data) {
    const response = Object.values(data)[0];
    let activeClinicData: IResponseData[] = response.filter(
      (item) => item.adress === activeClinic
    );

    return (
      <>
        <StyledHeader>
          <div>
            <Search
              inputString={searchString}
              option={searchOption}
              changeOptionHandler={setSearchOption}
              searchInputHandler={setSearhString}
            />
          </div>
          <div>
            <Link href="/">
              <Image
                width={40}
                height={40}
                src="/images/logo.png"
                alt="lambda_logo.png"
                priority
              />
            </Link>
          </div>
        </StyledHeader>
        {response && (
          <StyledContainer>
            <Results
              isLoading={loading}
              isError={error}
              searchResults={response}
              activeNow={activeClinic}
              setChosenClinic={setActiveClinic}
            />
            <Tabs
              setActiveClinic={setActiveClinic}
              allAvaliableData={response}
              isLoading={loading}
              isError={error}
              activeClinic={activeClinic}
              data={activeClinicData}
            />
          </StyledContainer>
        )}
      </>
    );
  }
}

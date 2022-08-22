import React from 'react'
import { PersonalInfo } from './PersonalInfo'
import { Tab, TabList, Tabs, TabPanel } from 'react-tabs'
import { BillingInfo } from './BillingInfo'
import { ConfirmPayment } from './ConfirmPayment'
export function TabSection(props) {

    const [tabIndex, setTabIndex] = React.useState(0);

    const nextTab = (e) => {
        setTabIndex(tabIndex + 1);

    }


    return (
        <>
            <Tabs className="mt-10" selectedTabClassName='text-[#F2994A] border-b-[8px] items-center flex rounded-[5px] pb-2 border-[#F2994A] z-10' selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList className="flex flex-row w-[90vw] md:w-[40vw] justify-between border-b border-black font-bold text-[#BDBDBD] outline-0" >
                    <Tab className="outline-0">Personal Info</Tab>
                    <Tab className="outline-0">Billing Info</Tab>
                    <Tab className="outline-0" >Confirm Payment</Tab>

                </TabList>

                <TabPanel>
                    <PersonalInfo nextTab={nextTab} />
                </TabPanel>
                <TabPanel>
                    <BillingInfo nextTab={nextTab} />
                </TabPanel>
                <TabPanel>

                    <ConfirmPayment />
                </TabPanel>
            </Tabs>

        </>
    )
}

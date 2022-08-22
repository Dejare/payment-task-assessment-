import React from 'react'
import { PersonalInfo } from './PersonalInfo'
import { Tab, TabList, Tabs, TabPanel } from 'react-tabs'
import { BillingInfo } from './BillingInfo'
import { ConfirmPayment } from './ConfirmPayment'
export function TabSection(props) {


    return (
        <>
            <Tabs className="mt-10" selectedTabClassName='text-[#F2994A] border-b-4 rounded-sm pb-2 border-[#F2994A]'>
                <TabList className="flex flex-row w-[90vw] md:w-[40vw] justify-between border-b border-black" >
                    <Tab>Personal Info</Tab>
                    <Tab>Billing Info</Tab>
                    <Tab>Confirm Payment</Tab>

                </TabList>

                <TabPanel>
                    <PersonalInfo />
                </TabPanel>
                <TabPanel>
                    <BillingInfo />
                </TabPanel>
                <TabPanel>

                    <ConfirmPayment />
                </TabPanel>
            </Tabs>

        </>
    )
}
import React from 'react'

const DashboardContent = () => {
  return (
    <div className=' flex flex-wrap h-full gap-5'>
                    <div class="p-4 card w-96 bg-gray-900 shadow-xl ">
                        <div class="card-body">
                            <div className='flex flex-col gap-8 items-center justify-center align-middle'>
                                <h1 class="card-title font-semibold text-2xl"><svg xmlns="http://www.w3.org/2000/svg" class="h-14 w-14 bg-primary-focus p-2 mr-2 rounded-md" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                                </svg>Purchased Courses</h1>

                                <p className='text-4xl'>10</p>
                            </div>
                        </div>
                    </div>
                    <div class="p-4 card w-96 bg-gray-900 shadow-xl ">
                        <div class="card-body">
                            <div className='flex flex-col gap-8 items-center justify-center align-middle'>
                                <h1 class="card-title font-semibold text-2xl"><svg xmlns="http://www.w3.org/2000/svg" class="h-14 w-14 bg-primary-focus p-2 mr-2 rounded-md" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                                </svg>Topics Involved</h1>

                                <p className='text-4xl'>1</p>
                            </div>
                        </div>
                    </div>
                    <div class="p-4 card w-96 bg-gray-900 shadow-xl">
                        <div class="card-body">
                            <div className='flex flex-col gap-8 items-center justify-center align-middle'>
                                <h1 class="card-title font-semibold text-2xl"><svg xmlns="http://www.w3.org/2000/svg" class="h-14 w-14 bg-primary-focus p-2 mr-2 rounded-md" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                                </svg>New Notifications</h1>

                                <p className='text-4xl'>0</p>
                            </div>
                        </div>
                    </div>
                    <div class="p-4 card w-96 bg-gray-900 shadow-xl">
                        <div class="card-body">
                            <div className='flex flex-col gap-8 items-center justify-center align-middle'>
                                <h1 class="card-title font-semibold text-2xl"><svg xmlns="http://www.w3.org/2000/svg" class="h-14 w-14 bg-primary-focus p-2 mr-2 rounded-md" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                                </svg>Current Badge</h1>

                                <p className='text-4xl'>King</p>
                            </div>
                        </div>

                    </div>
                </div>
  )
}

export default DashboardContent

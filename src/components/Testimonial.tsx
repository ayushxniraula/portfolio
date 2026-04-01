import React from 'react'

const Testimonial = () => {
  return (
    <>
    <div className="mt-10 sm:mt-14">
              <h2 className="mb-3 font-medium text-foreground">Testimonials</h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-3 border-y border-line-1 divide-y sm:divide-y-0 sm:divide-x divide-line-2">
                <div className="sm:-ms-4 py-6 sm:px-4">
                  <blockquote>
                    <span className="text-sm text-foreground">
                      I'm absolutely floored by the level of care and attention
                      to detail Eliana has put into this project and for one can
                      guarantee that we will be a return customer.
                    </span>

                    <footer className="mt-3">
                      <div className="flex items-center gap-x-2">
                        <img
                          className="shrink-0 size-5 rounded-full"
                          src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
                          alt="Avatar"
                        />
                        <div className="grow">
                          <div className="text-xs text-muted-foreground-1">
                            Josh Grazioso
                          </div>
                        </div>
                      </div>
                    </footer>
                  </blockquote>
                </div>

                <div className="py-6 sm:px-4">
                  <blockquote>
                    <span className="text-sm text-foreground">
                      To say that hiring Eliana has been life-changing is an
                      understatement. My business has tripled and I got my life
                      back.
                    </span>

                    <footer className="mt-3">
                      <div className="flex items-center gap-x-2">
                        <img
                          className="shrink-0 size-5 rounded-full"
                          src="https://images.unsplash.com/photo-1671726203390-cdc4354ee2eb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
                          alt="Avatar"
                        />
                        <div className="grow">
                          <div className="text-xs text-muted-foreground-1">
                            Nicole Grazioso
                          </div>
                        </div>
                      </div>
                    </footer>
                  </blockquote>
                </div>
              </div>
            </div>
    </>
  )
}

export default Testimonial
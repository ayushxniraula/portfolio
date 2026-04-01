import React from 'react'

const Article = () => {
  return (
   <>
     <div className="my-10 sm:my-14">
              <h2 className="mb-5 font-medium text-foreground">Articles</h2>

              <ul className="space-y-10">
                <li>
                  <p className="mb-2 text-sm text-muted-foreground-1">2024</p>
                  <h5 className="font-medium text-sm text-foreground">
                    The complete guide to OKRs
                  </h5>
                  <p className="mt-1 text-sm text-muted-foreground-1">
                    How to make objectives and key results work for your
                    company.
                  </p>
                  <p className="mt-1">
                    <a
                      className="text-sm text-muted-foreground-1 underline hover:text-primary-hover hover:decoration-2 focus:outline-hidden focus:decoration-2"
                      href="#"
                    >
                      Continue reading
                    </a>
                  </p>
                </li>

                <li>
                  <p className="mb-2 text-sm text-muted-foreground-1">2024</p>
                  <h5 className="font-medium text-sm text-foreground">
                    Enhancement in Customer Engagement
                  </h5>
                  <p className="mt-1 text-sm text-muted-foreground-1">
                    With the aim of optimizing customer interactions and
                    boosting brand loyalty, the team at Preline leveraged
                    Mailchimp's powerful tools and expertise to deliver
                    exceptional results.
                  </p>
                  <p className="mt-1">
                    <a
                      className="text-sm text-muted-foreground-1 underline hover:text-primary-hover hover:decoration-2 focus:outline-hidden focus:decoration-2"
                      href="#"
                    >
                      Continue reading
                    </a>
                  </p>
                </li>

                <li>
                  <p className="mb-2 text-sm text-muted-foreground-1">2023</p>
                  <h5 className="font-medium text-sm text-foreground">
                    How Google Assistant now helps you record stories for kids
                  </h5>
                  <p className="mt-1 text-sm text-muted-foreground-1">
                    Google is constantly updating its consumer AI, Google
                    Assistant, with new features.
                  </p>
                  <p className="mt-1">
                    <a
                      className="text-sm text-muted-foreground-1 underline hover:text-primary-hover hover:decoration-2 focus:outline-hidden focus:decoration-2"
                      href="#"
                    >
                      Continue reading
                    </a>
                  </p>
                </li>
              </ul>
            </div>
   </>
  )
}

export default Article
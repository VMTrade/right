import React from "react";

export default function Faq(props) {
  const dummyDesc = `Lorem ipsum dolor sit amet, consectetur adipiscing elit.Nullam semper faucibus erat a efficitur. Praesent vulputate
  mauris eget augue semper, at eleifend enim aliquam. Vivamus
  suscipit lacinia neque eget suscipit. Morbi vitae nisl ac
  justo placerat vulputate ac quis lectus. Vestibulum
  pellentesque, orci eu ultrices molestie, nisi libero
  hendrerit eros, vel interdum augue tortor vel urna. Nullam
  enim dolor, pulvinar in metus vitae, tincidunt dignissim
  neque.`;
  const faqData = [
    {
      id: "one",
      heading: "Registration",
      desc: dummyDesc,
    },
    {
      id: "two",
      heading: "Account Related",
      desc: dummyDesc,
    },
    {
      id: "three",
      heading: "Payment",
      desc: dummyDesc,
    },
    {
      id: "four",
      heading: "Delivery Related",
      desc: dummyDesc,
    },
    {
      id: "five",
      heading: "Order Related",
      desc: dummyDesc,
    },
    {
      id: "six",
      heading: "Return & Refund",
      desc: dummyDesc,
    },
  ];
  return (
    <div class="container">
      <div class="row">
        <div class="col-lg-12 col-md-12">
          <div class="default-title mt-4">
            <h2>Frequently Asked Questions</h2>
            <img src="images/line.svg" alt="" />
          </div>
          <div class="panel-group accordion pt-1" id="accordion0">
            {faqData.map((data) => (
              <div class="panel panel-default">
                <div class="panel-heading" id={"heading" + data.id}>
                  <div class="panel-title">
                    <a
                      class="collapsed"
                      data-toggle="collapse"
                      data-target={"#collapse" + data.id}
                      href="#"
                      aria-expanded="false"
                      aria-controls={"collapse" + data.id}
                    >
                      {data.heading}
                    </a>
                  </div>
                </div>
                <div
                  id={"collapse" + data.id}
                  class="panel-collapse collapse"
                  role="tabpanel"
                  aria-labelledby={"heading" + data.id}
                  data-parent="#accordion0"
                >
                  <div class="panel-body">
                    <p>{data.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

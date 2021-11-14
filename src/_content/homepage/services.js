import '../../_css/Services.css'

function services() {
  return (
    <>
    <p className="title">Services</p>
    <ul className="servicesTabs">
      <li><p>Advertising</p>
        <ul>
          <li>Media Agencies</li>
          <li>Ad Spaces</li>
          <li>B2B &amp; B2C</li>
          <li>Account Direction</li>
          <li>Project Management</li>
          </ul>
      </li>
      <li><p>Creative Design </p>
      <ul>
          <li>Multiple Platform</li>
          {/* TVC, Billboards, Banners, Websites, Applications */}
          <li>Expert Designers &amp; Developers</li>
          <li>Artwork / Retouching</li>
          <li>Asset Management</li>
          <li>Professional &amp; Swift Turnaround</li>
          </ul>

      </li>
      <li><p>Consultation</p>
      <ul>
          <li>Top Results</li>
          <li>Expert Market Knowledge</li>
          <li>Research &amp; Quality Feedback</li>
          <li>Quantitative &amp; Qualitative Insight</li>
          <li>Access Performance Analytics</li>
          </ul>
      </li>

      </ul>
      <div className="ctaInsight">
      <p>Find out how we can help your business<br/> <br/><button className="cta">Get A Quote</button></p>
      </div>
    </>

  )
}

export default services;
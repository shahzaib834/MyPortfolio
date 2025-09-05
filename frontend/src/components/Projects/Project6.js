import React from 'react'

const Project6 = () => {
  return (
    <article>
    <header>
      <h1>USA Based Company</h1>
      <p><strong>Role:</strong> Software Engineer</p>
      <p><strong>Domain:</strong> Transportation program management platform</p>
    </header>

    <section>
      <h2>Overview</h2>
      <p>
        It is a transportation program management platform. Worked on React and Angular. We were using
        Angular for the dashboard and the React part for booking and checking rides for riders (users).
        Dashboard was used to manage rides by other operations staff which includes many features like
        booking a ride, canceling a ride, adding coupons and discounts, regular office based routes, maps
        and rides, reports etc.
      </p>
    </section>

    <section>
      <h2>Modules</h2>
      <h3>Angular (Dashboard)</h3>
      <ul>
        <li>Manage rides by operations staff</li>
        <li>Booking a ride</li>
        <li>Canceling a ride</li>
        <li>Adding coupons and discounts</li>
        <li>Regular office based routes</li>
        <li>Maps and rides</li>
        <li>Reports</li>
      </ul>

      <h3>React (Rider App)</h3>
      <ul>
        <li>Users used to book and cancel a ride</li>
        <li>Add coupon codes while booking a ride</li>
        <li>Scheduling future rides</li>
        <li>Rides for particular organizations</li>
        <li>
          Organizations are Employers that need regular rides for their employees.
        </li>
      </ul>
    </section>

    <section>
      <h2>Technologies Used</h2>
      <ul>
        <li>REACT</li>
        <li>ANGULAR</li>
        <li>NODE</li>
        <li>EXPRESS</li>
        <li>NEST</li>
        <li>MYSQL</li>
        <li>REDUX</li>
      </ul>
    </section>

    <a
          rel='noreferrer'
          target='_blank'
          class='cta-btn cta-btn--hero'
          href='https://www.sharemobility.com/product'
        >
          See Live
        </a>
  </article>
  )
}

export default Project6
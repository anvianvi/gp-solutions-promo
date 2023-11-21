<?php
/* 
Template Name: "Promo Page"
*/
?>
<?php get_header(); ?>

<main class="container">
  <section class="hero container">
    <h1 class="h1 h-with-line"><?php the_field('hero_title'); ?></h1>
    <div class="hero-block">
      <p class="hero-text"><?php the_field('hero_text'); ?></p>
      <img src="<?php the_field('hero_img'); ?>" alt="photo of GP Solutions Team" />
    </div>
  </section>

  <section class="we-global">
    <h2 class="h2 h-with-line"><?php the_field('we_global_title'); ?></h2>
    <div class="text-block">
      <p class="paragraf"><?php the_field('we_global_text_top'); ?></p>
      <p><?php the_field('we_global_text_botom'); ?></p>
    </div>
  </section>

  <style>
  .customers-map {
    background: url(<?php echo get_template_directory_uri();
    ?>/img/word-map.png) top left no-repeat;
    background-size: contain;
  }
  </style>
  <!-- there should be a repeater here, but I can't set it up without a paid subscription  -->
  <div id="customers-map" class="customers-map">
    <?php
  $customersLogo = [
    ['name' => 'hotelplan', 'link' => get_template_directory_uri() . '/img/customers-icons/hotelplan.svg'],
    ['name' => 'ef', 'link' => get_template_directory_uri() . '/img/customers-icons/ef.svg'],
    ['name' => 'air canada', 'link' => get_template_directory_uri() . '/img/customers-icons/air-canada.svg'],
    ['name' => 'jitjatjo', 'link' => get_template_directory_uri() . '/img/customers-icons/jitjatjo.svg'],
    ['name' => 'audley', 'link' => get_template_directory_uri() . '/img/customers-icons/audley.svg'],
    ['name' => 'tallink', 'link' => get_template_directory_uri() . '/img/customers-icons/tallink.svg'],
    ['name' => 'dohop', 'link' => get_template_directory_uri() . '/img/customers-icons/dohop.svg'],
    ['name' => 'tourcompass', 'link' => get_template_directory_uri() . '/img/customers-icons/tourcompass.svg'],
    ['name' => 'versonix', 'link' => get_template_directory_uri() . '/img/customers-icons/versonix.svg'],
];
  foreach ($customersLogo as $logo) {
    ?>
    <div class="customer-logo-container">
      <img src="<?php echo esc_url($logo['link']); ?>" alt="<?php echo esc_attr($logo['name']); ?>" />
    </div>
    <?php
  }
  ?>
  </div>


  <section class="our-customers">
    <h3 class="h3 h-with-line"><?php the_field('our_customers_title'); ?></h3>
    <p class="paragraph"><?php the_field('our_customers_text'); ?></p>

    <!-- there should be a repeater here, but I can't set it up without a paid subscription -->
    <div id="categories-list" class="custumers-categories">
      <?php
$customersCategories = [
  ['name' => 'Tour Operators', 'link' => get_template_directory_uri() . '/img/customer-categories-icons/tour-operators.svg'],
  ['name' => 'DMCs', 'link' => get_template_directory_uri() . '/img/customer-categories-icons/dmcs.svg'],
  ['name' => 'OTAs', 'link' => get_template_directory_uri() . '/img/customer-categories-icons/otas.svg'],
  ['name' => 'TMCs', 'link' => get_template_directory_uri() . '/img/customer-categories-icons/tmcs.svg'],
  ['name' => 'Cruise Companies', 'link' => get_template_directory_uri() . '/img/customer-categories-icons/cruise-companies.svg'],
  ['name' => 'Travel Startups', 'link' => get_template_directory_uri() . '/img/customer-categories-icons/travel-startups.svg'],
];

foreach ($customersCategories as $category) {
  ?>
      <div class="category-container">
        <img src="<?php echo esc_url($category['link']); ?>" alt="<?php echo esc_attr($logo['name']); ?> icon"
          class="category-logo">
        <span><?php echo esc_attr($category['name']); ?></span>
        <img src="<?php echo get_template_directory_uri();
    ?>/img/customer-categories-icons/arrow-icon.svg" alt="icon with arrow" class="next-icon">
      </div>
      <?php
}
?>
    </div>

  </section>
</main>


<section class="leadership-block">
  <div class="container">
    <h2 class="h2 h-with-line"><?php the_field('our_employees_title'); ?></h2>

    <!-- there should be a repeater here, but I can't set it up without a paid subscription -->
    <div class="employees-list" id="employees-list">
      <?php
$employeeList = [
  [
      'photo' =>  get_template_directory_uri() . '/img/employee-photo/rodion.png',
      'avatar' =>  get_template_directory_uri() . '/img/employee-photo/rodion-round.png',
      'name' => 'Rodion Zhitomirsky',
      'role' => 'Chairman of the Board, Co-founder',
  ],
  [
      'photo' =>  get_template_directory_uri() . '/img/employee-photo/sergey.png',
      'avatar' =>  get_template_directory_uri() . '/img/employee-photo/sergey-round.png',
      'name' => 'Sergey Zubekhin',
      'role' => 'CEO, Co-founder',
  ],
  [
      'photo' =>  get_template_directory_uri() . '/img/employee-photo/maria.png',
      'avatar' =>  get_template_directory_uri() . '/img/employee-photo/maria-round.png',
      'name' => 'Maria Bondarenko',
      'role' => 'VP Product, Shareholder',
  ],
  [
      'photo' =>  get_template_directory_uri() . '/img/employee-photo/eugene.png',
      'avatar' =>  get_template_directory_uri() . '/img/employee-photo/eugene-round.png',
      'name' => 'Eugene Boiko',
      'role' => 'VP Software Development, Shareholder',
  ],
  [
      'photo' =>  get_template_directory_uri() . '/img/employee-photo/fred.png',
      'avatar' =>  get_template_directory_uri() . '/img/employee-photo/fred-round.png',
      'name' => 'Fred Bean',
      'role' => 'Chief Partnership Officer',
  ],
];

foreach ($employeeList as $employee) {
  ?>
      <div class="card"
        style="background: linear-gradient(72deg, rgba(0, 39, 123, 0.7) 0%, rgba(5, 83, 177, 0.7) 100%), url(<?php echo esc_url($employee['photo']); ?>);">
        <div class="face-circle" style="background: url(<?php echo esc_url($employee['avatar']); ?>) center no-repeat;">
        </div>
        <div class="info-block">
          <img src="<?php echo get_template_directory_uri();
    ?>/img/employee-photo/linked-in-icon.svg" alt="linkedIn icon" class="in-icon">
          <img src="<?php echo get_template_directory_uri();
    ?>/img/employee-photo/go-next-icon.png" alt="icon with arrow" class="go-in-icon">
          <p class="name"><?php echo esc_html($employee['name']); ?></p>
          <p class="position"><?php echo esc_html($employee['role']); ?></p>
        </div>
      </div>
      <?php
}
?>
    </div>

  </div>
</section>

<section class="travel-tehnology container">
  <div class="teh-content-container">
    <h2 class="h2 h-with-line"><?php the_field('travel_tehnology_title'); ?></h2>
    <p class="paragraph"><?php the_field('travel_tehnology_text'); ?></p>
  </div>
  <div class="teh-content-container">
    <div class="teh-label"><?php the_field('travel_tehnology_label'); ?></div>

    <div id="teh-list" class="teh-list">
      <?php
$technologyList = [
  [
      'title' => 'GP Travel Enterprise',
      'description' => 'GP Travel Enterprise is an innovative and powerful travel automation solution for Tour Operators, OTAs, DMCs, TMCs and Wholesalers, which helps hundreds of companies across the globe to run and grow their businesses.',
      'img' => get_template_directory_uri() . '/img/tehnology/enterprise.png',
  ],
  [
      'title' => 'GP Travel Hub',
      'description' => 'GP Travel Hub is a unified API aggregator designed for saving your time, keeping money in your pocket and helping you to launch faster.',
      'img' => get_template_directory_uri() . '/img/tehnology/hub.png',
  ],
  [
      'title' => 'Product-based Implementation',
      'description' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu pellentesque vestibulum, augue sodales.',
      'img' => get_template_directory_uri() . '/img/tehnology/implementation.png',
  ],
];

foreach ($technologyList as $item) {
  ?>
      <div class="teh-card">
        <div class="img-container">
          <img src="<?php echo esc_url($item['img']); ?>"
            alt="ilustration for <?php echo esc_attr($item['title']); ?> card">
        </div>
        <div class="info-container">
          <h4 class="h4"><?php echo esc_html($item['title']); ?></h4>
          <p class="description"><?php echo esc_html($item['description']); ?></p>
          <button type="button" class="teh-button">Learn More</button>
        </div>
      </div>
      <?php
}
?>
    </div>
  </div>
</section>

<?php get_footer(); ?>
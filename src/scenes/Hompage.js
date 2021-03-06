import React from 'react';
import Fade from 'react-reveal/Fade';

import Header from 'parts/Header';
import Client from 'parts/Client';
import Feature from 'parts/Feature';
import Footer from 'parts/Footer';
import Section from 'elements/Section';
import Button from 'elements/Button';
import Card from 'elements/Card';
import List from 'elements/List';

import Hero from 'assets/images/hero-image.png';
import FeatureTitle01 from 'assets/images/feature-tile-icon-01.svg';
import FeatureTitle02 from 'assets/images/feature-tile-icon-02.svg';
import FeatureTitle03 from 'assets/images/feature-tile-icon-03.svg';

export default function Hompage() {
  const features = [
    {
      imgSrc: FeatureTitle01,
      imgAlt: 'feature title image 01',
      title: 'Join with us',
      description:
        'A pseudo-Latin text used in web design, layout, and printing in place of things to emphasise design.',
    },
    {
      imgSrc: FeatureTitle02,
      imgAlt: 'feature title image 02',
      title: 'Join with us',
      description:
        'A pseudo-Latin text used in web design, layout, and printing in place of things to emphasise design.',
    },
    {
      imgSrc: FeatureTitle03,
      imgAlt: 'feature title image 03',
      title: 'Join with us',
      description:
        'A pseudo-Latin text used in web design, layout, and printing in place of things to emphasise design.',
    },
  ];
  const listPricing = [
    {
      price: 27,
      currency: '$',
      description: 'This is description paragraf',
      feature: [
        { isChecked: true, content: 'Lorem ipsum dolor amet' },
        { isChecked: true, content: 'Lorem ipsum dolor amet' },
        { isChecked: true, content: 'Lorem ipsum dolor amet' },
        { isChecked: false, content: 'Lorem ipsum dolor amet' },
        { isChecked: false, content: 'Lorem ipsum dolor amet' },
      ],
    },
    {
      price: 47,
      currency: '$',
      description: 'This is description paragraf',
      feature: [
        { isChecked: true, content: 'Lorem ipsum dolor amet' },
        { isChecked: true, content: 'Lorem ipsum dolor amet' },
        { isChecked: true, content: 'Lorem ipsum dolor amet' },
        { isChecked: true, content: 'Lorem ipsum dolor amet' },
        { isChecked: false, content: 'Lorem ipsum dolor amet' },
      ],
    },
    {
      price: 67,
      currency: '$',
      description: 'This is description paragraf',
      feature: [
        { isChecked: true, content: 'Lorem ipsum dolor amet' },
        { isChecked: true, content: 'Lorem ipsum dolor amet' },
        { isChecked: true, content: 'Lorem ipsum dolor amet' },
        { isChecked: true, content: 'Lorem ipsum dolor amet' },
        { isChecked: true, content: 'Lorem ipsum dolor amet' },
      ],
    },
  ];
  return (
    <div className="body-wrap">
      <Header />
      <main className="site-content">
        <Section className="hero illustration-section-01" isCentered>
          <div className="container-sm">
            <div className="hero-inner section-inner">
              <div className="hero-content">
                <Fade bottom delay={500}>
                  <h1 className="mt-0 mb-16">
                    Landing template for startups
                  </h1>
                </Fade>
                <div className="container-xs">
                  <Fade bottom delay={1000}>
                    <p className="mt-0 mb-32">
                      Our landing page template works on all devices, so you
                      only have to set it up once, and get beautiful results
                      forever.
                    </p>
                  </Fade>
                </div>
              </div>
              <div
                className="hero-figure illustration-element-01"
                data-reveal-value="20px"
              >
                <Fade bottom delay={1500}>
                  <img
                    className="has-shadow"
                    src={Hero}
                    alt="Hero"
                    width="896"
                    height="504"
                  />
                </Fade>
              </div>
            </div>
          </div>
        </Section>
        <Client />
        <Section className="features-tiles">
          <div className="container">
            <div className="features-tiles-inner section-inner">
              <div className="tiles-wrap">
                {features.map((feature, index) => (
                  <Feature
                    key={index}
                    delayInMS={index * 500}
                    data={feature}
                  />
                ))}
              </div>
            </div>
          </div>
        </Section>
        <Section className="pricing">
          <div className="container">
            <div className="pricing-inner section-inner has-top-divider">
              <div className="section-header center-content">
                <div className="container-xs">
                  <h2 className="mt-0 mb-16">Simple, transarent pricing</h2>
                  <p className="m-0">
                    Lorem ipsum is common placeholder text used to demonstrate
                    the graphic elements of a document or visual presentation.
                  </p>
                </div>
              </div>
              <div className="tiles-wrap">
                {listPricing.map((list, index) => (
                  <Card isShadow>
                    <div className="pricing-item-content">
                      <div className="pricing-item-header pb-24 mb-24">
                        <div className="pricing-item-price mb-4">
                          <span className="pricing-item-price-currency h2">
                            {list.currency}
                          </span>
                          <span
                            className="pricing-item-price-amount h1 pricing-switchable"
                            data-pricing-monthly="34"
                            data-pricing-yearly="27"
                          >
                            {list.price}
                          </span>
                        </div>
                        <div className="text-xs text-color-low">
                          {list.description}
                        </div>
                      </div>
                      <div className="pricing-item-features mb-40">
                        <div className="pricing-item-features-title h6 text-xs text-color-high mb-24">
                          What’s included
                        </div>
                        <List
                          data={list.feature}
                          isSmall
                          className="pricing-item-features-list mb-32"
                        />
                      </div>
                    </div>
                    <div className="pricing-item-cta mb-8">
                      <Button isPrimary isBlock>
                        Start free trial
                      </Button>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </div>
  );
}

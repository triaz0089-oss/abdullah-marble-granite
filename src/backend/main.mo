import Text "mo:core/Text";
import Array "mo:core/Array";
import Iter "mo:core/Iter";
import Order "mo:core/Order";
import Map "mo:core/Map";
import Runtime "mo:core/Runtime";

actor {
  type Category = {
    #minimal;
    #bold;
    #editorial;
    #ecommerce;
    #portfolio;
    #blog;
    #landing;
  };

  module Category {
    public func toText(category : Category) : Text {
      switch (category) {
        case (#minimal) { "Minimal" };
        case (#bold) { "Bold" };
        case (#editorial) { "Editorial" };
        case (#ecommerce) { "Ecommerce" };
        case (#portfolio) { "Portfolio" };
        case (#blog) { "Blog" };
        case (#landing) { "Landing" };
      };
    };

    public func compare(cat1 : Category, cat2 : Category) : Order.Order {
      switch (cat1, cat2) {
        case (#minimal, #minimal) { #equal };
        case (#minimal, _) { #less };
        case (_, #minimal) { #greater };

        case (#bold, #bold) { #equal };
        case (#bold, _) { #less };
        case (_, #bold) { #greater };

        case (#editorial, #editorial) { #equal };
        case (#editorial, _) { #less };
        case (_, #editorial) { #greater };

        case (#ecommerce, #ecommerce) { #equal };
        case (#ecommerce, _) { #less };
        case (_, #ecommerce) { #greater };

        case (#portfolio, #portfolio) { #equal };
        case (#portfolio, _) { #less };
        case (_, #portfolio) { #greater };

        case (#blog, #blog) { #equal };
        case (#blog, #landing) { #less };
        case (#landing, #blog) { #greater };

        case (#landing, #landing) { #equal };
      };
    };
  };

  type DesignStyle = {
    id : Text;
    name : Text;
    tagline : Text;
    description : Text;
    category : Category;
  };

  module DesignStyle {
    public func compare(d1 : DesignStyle, d2 : DesignStyle) : Order.Order {
      Text.compare(d1.name, d2.name);
    };
  };

  let designStyles = Map.empty<Text, DesignStyle>();

  let initialStyles : [DesignStyle] = [
    {
      id = "1";
      name = "Pure Minimalism";
      tagline = "Less is More";
      description = "A focus on whitespace, simple typography, and clean layouts. Perfect for portfolios and agencies.";
      category = #minimal;
    },
    {
      id = "2";
      name = "Heavyweight Colors";
      tagline = "Bold & Bright";
      description = "Bold colors and strong visuals to grab attention. Great for startups and creative brands.";
      category = #bold;
    },
    {
      id = "3";
      name = "Editorial Excellence";
      tagline = "Magazine-Style Publishing";
      description = "Grid layouts, strong typography, and engaging imagery for content-heavy sites.";
      category = #editorial;
    },
    {
      id = "4";
      name = "Clean Commerce";
      tagline = "Shop with Confidence";
      description = "Ecommerce-focused design with product visuals and streamlined checkouts.";
      category = #ecommerce;
    },
    {
      id = "5";
      name = "Creative Portfolios";
      tagline = "Showcase Your Work";
      description = "Portfolio templates with visual grids, project sliders, and creative layouts.";
      category = #portfolio;
    },
    {
      id = "6";
      name = "Modern Blogs";
      tagline = "Publish with Style";
      description = "Lean yet feature-rich blog/magazine for writers, podcasters, and content creators.";
      category = #blog;
    },
    {
      id = "7";
      name = "Landing Pages";
      tagline = "Convert with Simplicity";
      description = "High-conversion landing page designs focused on headlines, CTAs, and visuals.";
      category = #landing;
    },
    {
      id = "8";
      name = "Dark Mode Aesthetic";
      tagline = "Light On Eyes";
      description = "Dark color schemes with neon accents for sleek, modern, and accessible designs.";
      category = #minimal;
    },
    {
      id = "9";
      name = "Retro Vibes";
      tagline = "Classic Web Imagery";
      description = "Nostalgic designs with bold fonts, vibrant colors, and fun retro elements.";
      category = #bold;
    },
  ];

  for (style in initialStyles.values()) {
    designStyles.add(style.id, style);
  };

  public query ({ caller }) func getAllDesignStyles() : async [DesignStyle] {
    designStyles.values().toArray().sort();
  };

  public query ({ caller }) func getDesignStylesByCategory(cat : Category) : async [DesignStyle] {
    designStyles.values().toArray().filter(func(style) { Category.compare(style.category, cat) == #equal });
  };

  public query ({ caller }) func getDesignStyleById(id : Text) : async DesignStyle {
    switch (designStyles.get(id)) {
      case (null) { Runtime.trap("Design style not found") };
      case (?style) { style };
    };
  };
};

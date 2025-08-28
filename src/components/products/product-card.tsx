"use client";

import { useState } from "react";
import { Star, ShoppingCart, Eye, Heart } from "lucide-react";
// import { Button } from "@/components/ui/button"
import ProductModal from "./product-modal";
import { Button } from "antd";

interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviews: number;
  image: string;
  isOnSale: boolean;
  isFeatured: boolean;
  description: string;
}

interface ProductCardProps {
  product: Product;
  index: number;
  isVisible: boolean;
}

export default function ProductCard({
  product,
  index,
  isVisible,
}: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleViewDetails = () => {
    setShowModal(true);
  };

  return (
    <div
      className={`bg-white rounded-lg shadow-lg overflow-hidden group transition-all duration-700 hover:shadow-xl hover:transform hover:scale-105 ${
        isVisible
          ? "opacity-100 transform translate-y-0"
          : "opacity-0 transform translate-y-12"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Product Image */}
      <div className="relative h-64 overflow-hidden">
        <div className="w-full h-full bg-gray-200 flex items-center justify-center">
          {/* Placeholder for product image */}
          <div className="text-gray-400 text-center">
            <div className="w-20 h-20 bg-gray-300 rounded-lg mx-auto mb-2"></div>
            <p className="text-sm">{product.name}</p>
          </div>
        </div>

        {/* Badges */}
        <div className="absolute top-4 left-4 flex flex-col space-y-2">
          {product.isOnSale && (
            <span className="bg-red-500 text-white px-2 py-1 text-xs font-bold rounded">
              SALE
            </span>
          )}
          {product.isFeatured && (
            <span className="bg-gold text-white px-2 py-1 text-xs font-bold rounded">
              FEATURED
            </span>
          )}
        </div>

        {/* Action Buttons */}
        <div
          className={`absolute top-4 right-4 flex flex-col space-y-2 transition-all duration-300 ${
            isHovered
              ? "opacity-100 transform translate-x-0"
              : "opacity-0 transform translate-x-8"
          }`}
        >
          <button
            onClick={() => setIsFavorite(!isFavorite)}
            className={`p-2 rounded-full transition-colors duration-300 ${
              isFavorite
                ? "bg-red-500 text-white"
                : "bg-white text-gray-600 hover:bg-red-500 hover:text-white"
            }`}
          >
            <Heart className="h-4 w-4" />
          </button>
          <button
            onClick={handleViewDetails}
            className="p-2 bg-white text-gray-600 rounded-full hover:bg-gold hover:text-white transition-colors duration-300"
          >
            <Eye className="h-4 w-4" />
          </button>
        </div>

        {/* Quick Add to Cart */}
        <div
          className={`absolute bottom-4 left-4 right-4 transition-all duration-300 ${
            isHovered
              ? "opacity-100 transform translate-y-0"
              : "opacity-0 transform translate-y-8"
          }`}
        >
          <Button className="w-full bg-gold hover:bg-gold-dark text-white py-2 rounded-lg transition-all duration-300">
            <ShoppingCart className="h-4 w-4 mr-2" />
            Quick Add
          </Button>
        </div>
      </div>

      {/* Product Info */}
      <div className="p-6">
        <div className="mb-2">
          <span className="text-xs text-gold font-medium uppercase tracking-wide">
            {product.category}
          </span>
        </div>

        <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-gold transition-colors duration-300">
          {product.name}
        </h3>

        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {product.description}
        </p>

        {/* Rating */}
        <div className="flex items-center mb-4">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-4 w-4 ${
                  i < Math.floor(product.rating)
                    ? "text-gold fill-gold"
                    : "text-gray-300"
                }`}
              />
            ))}
          </div>
          <span className="text-sm text-gray-600 ml-2">
            {product.rating} ({product.reviews} reviews)
          </span>
        </div>

        {/* Price */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-gray-900">
              ${product.price}
            </span>
            {product.originalPrice && (
              <span className="text-lg text-gray-500 line-through">
                ${product.originalPrice}
              </span>
            )}
          </div>
          {product.originalPrice && (
            <span className="text-sm text-red-500 font-medium">
              Save ${(product.originalPrice - product.price).toFixed(2)}
            </span>
          )}
        </div>
      </div>

      {/* Product Modal */}
      {showModal && (
        <ProductModal
          product={product}
          isOpen={showModal}
          onClose={() => setShowModal(false)}
        />
      )}
    </div>
  );
}

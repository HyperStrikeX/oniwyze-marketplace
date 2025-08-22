// ============================================
// ONIWYZE MARKETPLACE - COMPLETE WEBSITE CODE
// ============================================
// Total Files: 472 source code files
// Complete React + Express marketplace platform

// ========== MAIN APP.TSX ==========
// CLIENT/SRC/APP.TSX
import { Switch, Route, Redirect } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { useAuth } from "@/hooks/useAuth";
import Landing from "@/pages/landing";
import Home from "@/pages/home";
import AuthPage from "@/pages/auth-page";
import SupplierDashboard from "@/pages/supplier-dashboard";
import SupplierAnalytics from "@/pages/supplier-analytics";
// import Analytics from "@/pages/analytics"; // Removed - using AdminDashboard for analytics
import LiveStreams from "@/pages/live-streams";
import MarketplaceInsights from "@/pages/marketplace-insights";
import SupplierOnboarding from "@/pages/supplier-onboarding";
import AdvancedSearch from "@/pages/advanced-search";
import InventoryManagement from "@/pages/inventory-management";
import OrderManagement from "@/pages/order-management";
import ProductCatalog from "@/pages/product-catalog";
import CustomerManagement from "@/pages/customer-management";
import SecurityDashboard from "@/pages/security-dashboard";
import AIAssistant from "@/pages/ai-assistant";
import AnalyticsDashboard from "@/pages/analytics-dashboard";
import LiveChat from "@/pages/live-chat";
import SellerRegistration from "@/pages/seller-registration";
import AdminDashboard from "@/pages/admin-dashboard";
import Products from "@/pages/products";
import Checkout from "@/pages/checkout";
import HowItWorks from "@/pages/how-it-works";
import SecureContact from "@/pages/secure-contact";
import ReachUs from "@/pages/reach-us";
import Support from "@/pages/support";
import About from "@/pages/about";
import NotFound from "@/pages/not-found";
import GlobalMarketplace from "@/pages/global-marketplace";
import SupplierNetwork from "@/pages/supplier-network";
import BusinessIntelligence from "@/pages/business-intelligence";
import PremiumServices from "@/pages/premium-services";
import AdvancedAnalytics from "@/pages/advanced-analytics";
import AIMarketplaceAssistant from "@/pages/ai-marketplace-assistant";
import GlobalSupplierHub from "@/pages/global-supplier-hub";
import MarketIntelligence from "@/pages/market-intelligence";
import ComprehensiveNavbar from "@/components/comprehensive-navbar";
import LiveStreamingHub from "@/pages/live-streaming-hub";
import EnhancedProducts from "@/pages/enhanced-products";
import Sellers from "@/pages/sellers";
import Orders from "@/pages/orders";
import Categories from "@/pages/categories";
import Deals from "@/pages/deals";
import Cart from "@/pages/cart";
import Wishlist from "@/pages/wishlist";
import Account from "@/pages/account";
import Help from "@/pages/help";
import Reviews from "@/pages/reviews";
import Compare from "@/pages/compare";
import PrivacyPolicy from "@/pages/privacy-policy";
import SellerCenter from "@/pages/seller-center";
import ProductManagement from "@/pages/product-management";
import NotificationCenterPage from "@/pages/notification-center";
import FinancialDashboard from "@/pages/financial-dashboard";
import MarketingHub from "@/pages/marketing-hub";
import ShippingCenter from "@/pages/shipping-center";
import AdvancedCustomerManagement from "@/pages/advanced-customer-management";
import BusinessAutomationCenter from "@/pages/business-automation-center";
import ComprehensiveAnalyticsSuite from "@/pages/comprehensive-analytics-suite";
import InventoryOptimizationCenter from "@/pages/inventory-optimization-center";
import AdvancedMarketplaceInsights from "@/pages/advanced-marketplace-insights";
 import EnhancedSecurityCenter from "@/pages/enhanced-security-center";
import GlobalExpansionHub from "@/pages/global-expansion-hub";
import SuperAdminDashboard from "@/pages/super-admin-dashboard";
import MarketplaceAnalytics from "@/pages/marketplace-analytics";
import GlobalExpansion from "@/pages/global-expansion";
import AIInsights from "@/pages/ai-insights";
import EnterpriseDashboard from "@/pages/enterprise-dashboard";
import RealTimeMonitoring from "@/pages/real-time-monitoring";
import FBMSettings from "@/pages/seller/fbm-settings";
import TwoFactorAuth from "@/pages/security/two-factor-auth";
import AdvancedBusinessIntelligence from "@/pages/advanced-business-intelligence";
import IntelligentAutomationCenter from "@/pages/intelligent-automation-center";
import AdvancedSecurityMonitoring from "@/pages/advanced-security-monitoring";
import ComprehensiveMarketplaceHub from "@/pages/comprehensive-marketplace-hub";
import StrategicBusinessOperations from "@/pages/strategic-business-operations";
import MultiRegionalOperations from "@/pages/multi-regional-operations";
import CustomerRelationshipManagement from "@/pages/customer-relationship-management";
import AIProductRecommendations from "@/pages/ai-product-recommendations";
import ComprehensiveFinancialDashboard from "@/pages/comprehensive-financial-dashboard";
import AdvancedInventoryManagement from "@/pages/advanced-inventory-management";
import EnterpriseOrderManagement from "@/pages/enterprise-order-management";
import RealTimeBusinessIntelligence from "@/pages/real-time-business-intelligence";
import ComprehensiveSecurityDashboard from "@/pages/comprehensive-security-dashboard";
import EnterpriseSupplierManagement from "@/pages/enterprise-supplier-management";
import CustomsDemo from "@/pages/customs-demo";
import ProductDetail from "@/pages/product-detail";
import ShoppingCart from "@/pages/shopping-cart";
import CheckoutComplete from "@/pages/checkout-complete";
import FeaturesShowcase from "@/pages/features-showcase";

// Protected Route Component for role-based access
function ProtectedRoute({ 
  component: Component, 
  requiredRole, 
  ...props 
}: { 
  component: () => JSX.Element; 
  requiredRole?: string; 
  [key: string]: any;
}) {
  const { user, isAuthenticated, isLoading } = useAuth();

  if (isLoading) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center">
        <div className="animate-spin w-8 h-8 border-4 border-yellow-500 border-t-transparent rounded-full" />
      </div>
    );
  }

  if (!isAuthenticated || !user) {
    return <Redirect to="/auth" />;
  }

  if (requiredRole && user.role !== requiredRole) {
    return <Redirect to="/" />;
  }

  return <Component {...props} />;
}

function Router() {
  const { isAuthenticated, isLoading } = useAuth();

  if (isLoading) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center">
        <div className="animate-spin w-8 h-8 border-4 border-yellow-500 border-t-transparent rounded-full" />
      </div>
    );
  }

  return (
    <div className="min-h-[80vh] bg-gray-50">
      <ComprehensiveNavbar />
      <main className="pt-0">
        <Switch>
      {/* Public routes */}
      <Route path="/auth" component={AuthPage} />
      <Route path="/products" component={Products} />
      <Route path="/enhanced-products" component={EnhancedProducts} />
      <Route path="/features" component={FeaturesShowcase} />
      <Route path="/sellers" component={Sellers} />
      <Route path="/orders" component={Orders} />
      <Route path="/categories" component={Categories} />
      <Route path="/deals" component={Deals} />
      <Route path="/cart" component={Cart} />
      <Route path="/wishlist" component={Wishlist} />
      <Route path="/account" component={Account} />
      <Route path="/help" component={Help} />
      <Route path="/reviews" component={Reviews} />
      <Route path="/compare" component={Compare} />
      <Route path="/admin-dashboard" component={AdminDashboard} />
      <Route path="/privacy-policy" component={PrivacyPolicy} />
      <Route path="/seller-registration" component={SellerRegistration} />
      <Route path="/how-it-works" component={HowItWorks} />
      <Route path="/secure-contact" component={SecureContact} />
      <Route path="/reach-us" component={ReachUs} />
      <Route path="/support" component={Support} />
      <Route path="/about" component={About} />
      <Route path="/live-streams" component={LiveStreams} />
      <Route path="/marketplace-insights" component={MarketplaceInsights} />
      <Route path="/supplier-onboarding" component={SupplierOnboarding} />
      <Route path="/advanced-search" component={AdvancedSearch} />
      <Route path="/inventory-management" component={InventoryManagement} />
      <Route path="/order-management" component={OrderManagement} />
      <Route path="/product-catalog" component={ProductCatalog} />
      <Route path="/customer-management" component={CustomerManagement} />
      <Route path="/security-dashboard" component={SecurityDashboard} />
      <Route path="/ai-assistant" component={AIAssistant} />
      <Route path="/analytics-dashboard" component={AnalyticsDashboard} />
      <Route path="/live-chat" component={LiveChat} />
      <Route path="/global-seller-hub" component={GlobalSupplierHub} />
      <Route path="/market-intelligence" component={MarketIntelligence} />
      <Route path="/premium-services" component={PremiumServices} />
      <Route path="/global-marketplace" component={GlobalMarketplace} />
      <Route path="/seller-network" component={SupplierNetwork} />
      <Route path="/business-intelligence" component={BusinessIntelligence} />
      <Route path="/advanced-analytics" component={AdvancedAnalytics} />
      <Route path="/ai-marketplace-assistant" component={AIMarketplaceAssistant} />
      <Route path="/live-streaming-hub" component={LiveStreamingHub} />
      <Route path="/customs-demo" component={CustomsDemo} />
      <Route path="/product/:id" component={ProductDetail} />
      <Route path="/shopping-cart" component={ShoppingCart} />
      <Route path="/checkout" component={CheckoutComplete} />
      
      {/* Advanced Seller Tools */}
      <Route path="/seller-center" component={SellerCenter} />
      <Route path="/product-management" component={ProductManagement} />
      <Route path="/notification-center" component={NotificationCenterPage} />
      <Route path="/seller/fbm-settings" component={FBMSettings} />
      <Route path="/security/two-factor-auth" component={TwoFactorAuth} />
      <Route path="/financial-dashboard" component={FinancialDashboard} />
      <Route path="/marketing-hub" component={MarketingHub} />
      <Route path="/shipping-center" component={ShippingCenter} />
      <Route path="/advanced-customer-management" component={AdvancedCustomerManagement} />
      <Route path="/business-automation-center" component={BusinessAutomationCenter} />
      <Route path="/comprehensive-analytics-suite" component={ComprehensiveAnalyticsSuite} />
      <Route path="/inventory-optimization-center" component={InventoryOptimizationCenter} />
      <Route path="/advanced-marketplace-insights" component={AdvancedMarketplaceInsights} />
      <Route path="/enhanced-security-center" component={EnhancedSecurityCenter} />
      <Route path="/global-expansion-hub" component={GlobalExpansionHub} />
      <Route path="/super-admin-dashboard" component={SuperAdminDashboard} />
      
      {/* Protected routes */}
      <Route path="/checkout/:productId">
        {(params) => <ProtectedRoute component={Checkout} {...params} />}
      </Route>
      
      <Route path="/seller">
        {() => <ProtectedRoute component={SupplierDashboard} requiredRole="seller" />}
      </Route>
      
      <Route path="/seller/analytics">
        {() => <ProtectedRoute component={SupplierAnalytics} requiredRole="seller" />}
      </Route>
      
      <Route path="/admin">
        {() => <ProtectedRoute component={AdminDashboard} requiredRole="admin" />}
      </Route>
      
      <Route path="/analytics">
        {() => <ProtectedRoute component={AdminDashboard} requiredRole="admin" />}
      </Route>
      <Route path="/marketplace-analytics" component={MarketplaceAnalytics} />
      <Route path="/global-expansion" component={GlobalExpansion} />
      <Route path="/ai-insights" component={AIInsights} />
      <Route path="/enterprise-dashboard" component={() => <ProtectedRoute component={EnterpriseDashboard} requiredRole="admin" />} />
      <Route path="/real-time-monitoring" component={RealTimeMonitoring} />
      <Route path="/advanced-business-intelligence" component={AdvancedBusinessIntelligence} />
      <Route path="/intelligent-automation-center" component={IntelligentAutomationCenter} />
      <Route path="/advanced-security-monitoring" component={() => <ProtectedRoute component={AdvancedSecurityMonitoring} requiredRole="admin" />} />
      <Route path="/comprehensive-marketplace-hub" component={ComprehensiveMarketplaceHub} />
      <Route path="/strategic-business-operations" component={() => <ProtectedRoute component={StrategicBusinessOperations} requiredRole="admin" />} />
      <Route path="/multi-regional-operations" component={() => <ProtectedRoute component={MultiRegionalOperations} requiredRole="admin" />} />
      <Route path="/customer-relationship-management" component={CustomerRelationshipManagement} />
      <Route path="/ai-product-recommendations" component={AIProductRecommendations} />
      <Route path="/comprehensive-financial-dashboard" component={() => <ProtectedRoute component={ComprehensiveFinancialDashboard} requiredRole="admin" />} />
      <Route path="/advanced-inventory-management" component={() => <ProtectedRoute component={AdvancedInventoryManagement} requiredRole="admin" />} />
      <Route path="/enterprise-order-management" component={() => <ProtectedRoute component={EnterpriseOrderManagement} requiredRole="admin" />} />
      <Route path="/intelligent-automation-center" component={() => <ProtectedRoute component={IntelligentAutomationCenter} requiredRole="admin" />} />
      <Route path="/marketplace-analytics" component={() => <ProtectedRoute component={MarketplaceAnalytics} requiredRole="admin" />} />
      <Route path="/real-time-business-intelligence" component={() => <ProtectedRoute component={RealTimeBusinessIntelligence} requiredRole="admin" />} />
      <Route path="/comprehensive-security-dashboard" component={() => <ProtectedRoute component={ComprehensiveSecurityDashboard} requiredRole="admin" />} />
      <Route path="wws/enterprise-supplier-management" component={() => <ProtectedRoute component={EnterpriseSupplierManagement} requiredRole="admin" />} />

      {/* Home route - authenticated users get Home, others get Landing */}
      <Route path="/">
        {() => (isAuthenticated ? <Home /> : <Landing />)}
      </Route>

      {/* Catch-all routes for common mobile navigation patterns */}
      <Route path="/login" component={AuthPage} />
      <Route path="/signin" component={AuthPage} />
      <Route path="/signup" component={AuthPage} />
      <Route path="/register" component={AuthPage} />

      {/* Catch all - show 404 only for unknown routes */}
      <Route component={NotFound} />
        </Switch>
      </main>
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;


// ========== SERVER INDEX.TS ==========
import express, { type Request, Response, NextFunction } from "express";
import { registerRoutes } from "./routes";
import { setupVite, serveStatic, log } from "./vite";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Redirect replit.app domain to custom domain
app.use((req, res, next) => {
  const host = req.get('host');
  if (host && host.includes('replit.app') && process.env.NODE_ENV === 'production') {
    return res.redirect(301, `https://oniwyze.com${req.originalUrl}`);
  }
  next();
});

app.use((req, res, next) => {
  const start = Date.now();
  const path = req.path;
  let capturedJsonResponse: Record<string, any> | undefined = undefined;

  const originalResJson = res.json;
  res.json = function (bodyJson, ...args) {
    capturedJsonResponse = bodyJson;
    return originalResJson.apply(res, [bodyJson, ...args]);
  };

  res.on("finish", () => {
    const duration = Date.now() - start;
    if (path.startsWith("/api")) {
      let logLine = `${req.method} ${path} ${res.statusCode} in ${duration}ms`;
      if (capturedJsonResponse) {
        logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
      }

      if (logLine.length > 80) {
        logLine = logLine.slice(0, 79) + "…";
      }

      log(logLine);
    }
  });

  next();
});

(async () => {
  try {
    const server = await registerRoutes(app);

    app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
      const status = err.status || err.statusCode || 500;
      const message = err.message || "Internal Server Error";
      
      console.error('Express error:', err);
      res.status(status).json({ message });
    });

    // importantly only setup vite in development and after
    // setting up all the other routes so the catch-all route
    // doesn't interfere with the other routes
    if (app.get("env") === "development") {
      await setupVite(app, server);
    } else {
      serveStatic(app);
    }

    // ALWAYS serve the app on the port specified in the environment variable PORT
    // Other ports are firewalled. Default to 80 if not specified.
    // this serves both the API and the client.
    // It is the only port that is not firewalled.
    const port = parseInt(process.env.PORT || '80', 10);
    
    server.on('error', (err) => {
      console.error('Server error:', err);
      process.exit(1);
    });
    
    server.listen({
      port,
      host: "0.0.0.0",
      reusePort: true,
    }, () => {
      log(`serving on port ${port}`);
    });
  } catch (error) {
    console.error('Failed to start server:', error);
    process.exit(1);
  }
})();


// ========== DATABASE SCHEMA ==========
import {
  pgTable,
  text,
  varchar,
  timestamp,
  jsonb,
  index,
  serial,
  integer,
  decimal,
  boolean,
  uuid,
} from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

// Session storage table for Replit Auth
export const sessions = pgTable(
  "sessions",
  {
    sid: varchar("sid").primaryKey(),
    sess: jsonb("sess").notNull(),
    expire: timestamp("expire").notNull(),
  },
  (table) => [index("IDX_session_expire").on(table.expire)],
);

// User roles enum
export const userRoles = ["customer", "supplier", "seller", "admin"] as const;

// Enhanced Users table with advanced marketplace features
export const users = pgTable("users", {
  id: varchar("id").primaryKey(),
  email: varchar("email").unique().notNull(),
  password: varchar("password"), // nullable for social auth users
  firstName: varchar("first_name"),
  lastName: varchar("last_name"),
  profileImageUrl: varchar("profile_image_url"),
  role: varchar("role", { enum: userRoles }).default("customer").notNull(),
  isApproved: boolean("is_approved").default(true).notNull(), // auto-approve for custom auth
  supplierRegistrationOrder: integer("supplier_registration_order"),
  hasSignedContract: boolean("has_signed_contract").default(false).notNull(),
  contractSignedAt: timestamp("contract_signed_at"),
  stripeCustomerId: varchar("stripe_customer_id"),
  stripeSubscriptionId: varchar("stripe_subscription_id"),
  // Enhanced profile fields
  phone: varchar("phone"),
  dateOfBirth: timestamp("date_of_birth"),
  gender: varchar("gender"),
  language: varchar("language").default("en").notNull(),
  timezone: varchar("timezone").default("UTC").notNull(),
  country: varchar("country"),
  countryCode: varchar("country_code"), // ISO country code for currency detection
  currency: varchar("currency").default("EUR").notNull(), // Auto-detected currency
  city: varchar("city"),
  address: text("address"),
  postalCode: varchar("postal_code"),
  // Business fields for suppliers
  businessName: varchar("business_name"),
  businessType: varchar("business_type"),
  businessDescription: text("business_description"),
  website: varchar("website"),
  // Preferences and settings
  emailNotifications: boolean("email_notifications").default(true).notNull(),
  smsNotifications: boolean("sms_notifications").default(false).notNull(),
  marketingEmails: boolean("marketing_emails").default(true).notNull(),
  // Social auth fields
  googleId: varchar("google_id"),
  facebookId: varchar("facebook_id"),
  appleId: varchar("apple_id"),
  microsoftId: varchar("microsoft_id"),
  twitterId: varchar("twitter_id"),
  emailVerified: boolean("email_verified").default(false).notNull(),
  phoneVerified: boolean("phone_verified").default(false).notNull(),
  twoFactorEnabled: boolean("two_factor_enabled").default(true).notNull(), // Mandatory 2FA
  twoFactorSecret: varchar("two_factor_secret"),
  twoFactorBackupCodes: text("two_factor_backup_codes").array(),
  twoFactorSetupCompleted: boolean("two_factor_setup_completed").default(false).notNull(),
  lastLoginAt: timestamp("last_login_at"),
  // FBM (Fulfillment by Merchant) settings for sellers
  fbmEnabled: boolean("fbm_enabled").default(false).notNull(),
  fbmWarehouseAddress: text("fbm_warehouse_address"),
  fbmShippingMethods: jsonb("fbm_shipping_methods").$type<{
    method: string;
    carrier: string;
    estimatedDays: number;
    cost: number;
    trackingAvailable: boolean;
  }[]>(),
  fbmProcessingTime: integer("fbm_processing_time").default(2), // days
  fbmReturnPolicy: text("fbm_return_policy"),
  isActive: boolean("is_active").default(true).notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

// Enhanced Products table - aligned with actual database
export const products = pgTable("products", {
  id: uuid("id").primaryKey().defaultRandom(),
  supplierId: varchar("supplier_id").references(() => users.id).notNull(),
  name: varchar("name").notNull(),
  description: text("description"),
  price: varchar("price").notNull(), // Changed to varchar to match database
  imageUrl: varchar("image_url"),
  category: varchar("category"),
  inventory: integer("inventory").default(1).notNull(),
  isActive: boolean("is_active").default(true).notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

// Orders table
export const orders = pgTable("orders", {
  id: uuid("id").primaryKey().defaultRandom(),
  customerId: varchar("customer_id").references(() => users.id).notNull(),
  supplierId: varchar("supplier_id").references(() => users.id).notNull(),
  productId: uuid("product_id").references(() => products.id).notNull(),
  quantity: integer("quantity").notNull(),
  unitPrice: decimal("unit_price", { precision: 10, scale: 2 }).notNull(),
  totalAmount: decimal("total_amount", { precision: 10, scale: 2 }).notNull(),
  commissionRate: decimal("commission_rate", { precision: 5, scale: 2 }).notNull(),
  commissionAmount: decimal("commission_amount", { precision: 10, scale: 2 }).notNull(),
  supplierAmount: decimal("supplier_amount", { precision: 10, scale: 2 }).notNull(),
  status: varchar("status").default("pending").notNull(),
  stripePaymentIntentId: varchar("stripe_payment_intent_id"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

// Commission overrides table for admin control
export const commissionOverrides = pgTable("commission_overrides", {
  id: uuid("id").primaryKey().defaultRandom(),
  supplierId: varchar("supplier_id").references(() => users.id).notNull(),
  commissionRate: decimal("commission_rate", { precision: 5, scale: 2 }).notNull(),
  isActive: boolean("is_active").default(true).notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

// Supplier registration applications table
export const supplierApplications = pgTable("supplier_applications", {
  id: uuid("id").primaryKey().defaultRandom(),
  businessName: varchar("business_name").notNull(),
  businessType: varchar("business_type").notNull(),
  contactPerson: varchar("contact_person").notNull(),
  email: varchar("email").notNull(),
  phone: varchar("phone").notNull(),
  website: varchar("website"),
  address: text("address").notNull(),
  city: varchar("city").notNull(),
  country: varchar("country").notNull(),
  postalCode: varchar("postal_code").notNull(),
  productCategories: text("product_categories").notNull(),
  businessDescription: text("business_description").notNull(),
  yearsInBusiness: varchar("years_in_business").notNull(),
  annualRevenue: varchar("annual_revenue").notNull(),
  employeeCount: varchar("employee_count").notNull(),
  certifications: text("certifications"),
  references: text("references"),
  additionalInfo: text("additional_info"),
  status: varchar("status").default("pending").notNull(), // pending, approved, rejected
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

// Enhanced Relations for advanced features
export const usersRelations = relations(users, ({ many }) => ({
  products: many(products),
  orders: many(orders),
  commissionOverrides: many(commissionOverrides),
  productReviews: many(productReviews),
  wishlists: many(wishlists),
  cartItems: many(cartItems),
  supplierMetrics: many(supplierMetrics),
  notifications: many(notifications),
  blogPosts: many(blogPosts),
  userNotifications: many(userNotifications),
  searchActivities: many(searchActivities),
}));

export const productsRelations = relations(products, ({ one, many }) => ({
  supplier: one(users, {
    fields: [products.supplierId],
    references: [users.id],
  }),
  // category: one(productCategories, {
  //   fields: [products.categoryId],
  //   references: [productCategories.id],
  // }),
  orders: many(orders),
  reviews: many(productReviews),
  wishlists: many(wishlists),
  cartItems: many(cartItems),
}));

export const ordersRelations = relations(orders, ({ one }) => ({
  customer: one(users, {
    fields: [orders.customerId],
    references: [users.id],
  }),
  supplier: one(users, {
    fields: [orders.supplierId],
    references: [users.id],
  }),
  product: one(products, {
    fields: [orders.productId],
    references: [products.id],
  }),
}));

export const commissionOverridesRelations = relations(commissionOverrides, ({ one }) => ({
  supplier: one(users, {
    fields: [commissionOverrides.supplierId],
    references: [users.id],
  }),
}));

// Zod schemas
export const upsertUserSchema = createInsertSchema(users).pick({
  id: true,
  email: true,
  firstName: true,
  lastName: true,
  profileImageUrl: true,
  role: true,
  isApproved: true,
  supplierRegistrationOrder: true,
  stripeCustomerId: true,
  stripeSubscriptionId: true,
});

export const insertProductSchema = createInsertSchema(products).omit({
  id: true,
  createdAt: true,
  updatedAt: true,
});

export const insertOrderSchema = createInsertSchema(orders).omit({
  id: true,
  createdAt: true,
  updatedAt: true,
});

export const insertUserSchema = createInsertSchema(users).omit({
  id: true,
  createdAt: true,
  updatedAt: true,
});

export const insertCommissionOverrideSchema = createInsertSchema(commissionOverrides).omit({
  id: true,
  createdAt: true,
  updatedAt: true,
});

// Types
export type UpsertUser = z.infer<typeof upsertUserSchema>;
export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;
export type InsertProduct = z.infer<typeof insertProductSchema>;
export type Product = typeof products.$inferSelect;
export type InsertOrder = z.infer<typeof insertOrderSchema>;
export type Order = typeof orders.$inferSelect;
export type InsertCommissionOverride = z.infer<typeof insertCommissionOverrideSchema>;
export type CommissionOverride = typeof commissionOverrides.$inferSelect;

// Advanced Marketplace Features for 2025

// Product Reviews and Ratings
export const productReviews = pgTable("product_reviews", {
  id: uuid("id").primaryKey().defaultRandom(),
  productId: uuid("product_id").references(() => products.id).notNull(),
  customerId: varchar("customer_id").references(() => users.id).notNull(),
  rating: integer("rating").notNull(), // 1-5 stars
  reviewText: text("review_text"),
  isVerifiedPurchase: boolean("is_verified_purchase").default(false).notNull(),
  isHelpful: integer("helpful_votes").default(0).notNull(),
  images: text("images").array(), // Array of image URLs
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

// Product Categories with hierarchical structure
export const productCategories: any = pgTable("product_categories", {
  id: uuid("id").primaryKey().defaultRandom(),
  name: varchar("name").notNull(),
  slug: varchar("slug").unique().notNull(),
  description: text("description"),
  parentId: uuid("parent_id").references((): any => productCategories.id),
  imageUrl: varchar("image_url"),
  isActive: boolean("is_active").default(true).notNull(),
  sortOrder: integer("sort_order").default(0).notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

// Wishlist/Favorites
export const wishlists = pgTable("wishlists", {
  id: uuid("id").primaryKey().defaultRandom(),
  customerId: varchar("customer_id").references(() => users.id).notNull(),
  productId: uuid("product_id").references(() => products.id).notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

// Shopping Cart
export const cartItems = pgTable("cart_items", {
  id: uuid("id").primaryKey().defaultRandom(),
  customerId: varchar("customer_id").references(() => users.id).notNull(),
  productId: uuid("product_id").references(() => products.id).notNull(),
  quantity: integer("quantity").notNull(),
  addedAt: timestamp("added_at").defaultNow().notNull(),
});

// Supplier Performance Metrics
export const supplierMetrics = pgTable("supplier_metrics", {
  id: uuid("id").primaryKey().defaultRandom(),
  supplierId: varchar("supplier_id").references(() => users.id).notNull(),
  totalOrders: integer("total_orders").default(0).notNull(),
  totalRevenue: decimal("total_revenue", { precision: 12, scale: 2 }).default("0").notNull(),
  averageRating: decimal("average_rating", { precision: 3, scale: 2 }).default("0").notNull(),
  responseTime: integer("avg_response_time_hours").default(24).notNull(),
  fulfillmentRate: decimal("fulfillment_rate", { precision: 5, scale: 2 }).default("100").notNull(),
  lastUpdated: timestamp("last_updated").defaultNow().notNull(),
});

// Advanced Search and Analytics
export const searchAnalytics = pgTable("search_analytics", {
  id: uuid("id").primaryKey().defaultRandom(),
  searchTerm: varchar("search_term").notNull(),
  resultsCount: integer("results_count").notNull(),
  userId: varchar("user_id").references(() => users.id),
  clickedProductId: uuid("clicked_product_id").references(() => products.id),
  searchDate: timestamp("search_date").defaultNow().notNull(),
});

// Notifications System
export const notifications = pgTable("notifications", {
  id: uuid("id").primaryKey().defaultRandom(),
  userId: varchar("user_id").references(() => users.id).notNull(),
  type: varchar("type").notNull(), // order_update, new_product, promotion, etc.
  title: varchar("title").notNull(),
  message: text("message").notNull(),
  isRead: boolean("is_read").default(false).notNull(),
  actionUrl: varchar("action_url"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

// Contact Messages & Support
export const contactMessages = pgTable("contact_messages", {
  id: uuid("id").primaryKey().defaultRandom(),
  name: varchar("name").notNull(),
  email: varchar("email").notNull(),
  subject: varchar("subject").notNull(),
  message: text("message").notNull(),
  category: varchar("category").default("general").notNull(),
  priority: varchar("priority").default("normal").notNull(),
  status: varchar("status").default("open").notNull(),
  adminResponse: text("admin_response"),
  respondedAt: timestamp("responded_at"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

// Blog/Content Management
export const blogPosts = pgTable("blog_posts", {
  id: uuid("id").primaryKey().defaultRandom(),
  title: varchar("title").notNull(),
  slug: varchar("slug").unique().notNull(),
  excerpt: text("excerpt"),
  content: text("content").notNull(),
  featuredImage: varchar("featured_image"),
  authorId: varchar("author_id").references(() => users.id).notNull(),
  category: varchar("category").notNull(),
  tags: text("tags").array(),
  isPublished: boolean("is_published").default(false).notNull(),
  viewCount: integer("view_count").default(0).notNull(),
  publishedAt: timestamp("published_at"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

// Additional Zod schemas for new tables
export const insertProductReviewSchema = createInsertSchema(productReviews).omit({
  id: true,
  createdAt: true,
  updatedAt: true,
});

export const insertWishlistSchema = createInsertSchema(wishlists).omit({
  id: true,
  createdAt: true,
});

export const insertCartItemSchema = createInsertSchema(cartItems).omit({
  id: true,
  addedAt: true,
});

export const insertNotificationSchema = createInsertSchema(notifications).omit({
  id: true,
  createdAt: true,
});

export const insertContactMessageSchema = createInsertSchema(contactMessages).omit({
  id: true,
  createdAt: true,
});

export const insertBlogPostSchema = createInsertSchema(blogPosts).omit({
  id: true,
  createdAt: true,
  updatedAt: true,
});

// Additional Types
export type ProductReview = typeof productReviews.$inferSelect;
export type InsertProductReview = z.infer<typeof insertProductReviewSchema>;
export type Wishlist = typeof wishlists.$inferSelect;
export type InsertWishlist = z.infer<typeof insertWishlistSchema>;
export type CartItem = typeof cartItems.$inferSelect;
export type InsertCartItem = z.infer<typeof insertCartItemSchema>;
export type Notification = typeof notifications.$inferSelect;
export type InsertNotification = z.infer<typeof insertNotificationSchema>;
export type ContactMessage = typeof contactMessages.$inferSelect;
export type InsertContactMessage = z.infer<typeof insertContactMessageSchema>;
export type BlogPost = typeof blogPosts.$inferSelect;
export type InsertBlogPost = z.infer<typeof insertBlogPostSchema>;

// Extended relation definitions
export const productReviewsRelations = relations(productReviews, ({ one }) => ({
  product: one(products, {
    fields: [productReviews.productId],
    references: [products.id],
  }),
  customer: one(users, {
    fields: [productReviews.customerId],
    references: [users.id],
  }),
}));

export const productCategoriesRelations = relations(productCategories, ({ one, many }) => ({
  parent: one(productCategories, {
    fields: [productCategories.parentId],
    references: [productCategories.id],
  }),
  children: many(productCategories),
  products: many(products),
}));

export const wishlistsRelations = relations(wishlists, ({ one }) => ({
  customer: one(users, {
    fields: [wishlists.customerId],
    references: [users.id],
  }),
  product: one(products, {
    fields: [wishlists.productId],
    references: [products.id],
  }),
}));

export const cartItemsRelations = relations(cartItems, ({ one }) => ({
  customer: one(users, {
    fields: [cartItems.customerId],
    references: [users.id],
  }),
  product: one(products, {
    fields: [cartItems.productId],
    references: [products.id],
  }),
}));

export const supplierMetricsRelations = relations(supplierMetrics, ({ one }) => ({
  supplier: one(users, {
    fields: [supplierMetrics.supplierId],
    references: [users.id],
  }),
}));

export const notificationsRelations = relations(notifications, ({ one }) => ({
  user: one(users, {
    fields: [notifications.userId],
    references: [users.id],
  }),
}));

export const blogPostsRelations = relations(blogPosts, ({ one }) => ({
  author: one(users, {
    fields: [blogPosts.authorId],
    references: [users.id],
  }),
}));

// User notifications table for search recommendations and alerts
export const userNotifications = pgTable("user_notifications", {
  id: varchar("id").primaryKey(),
  userId: varchar("user_id").notNull(),
  type: varchar("type", { enum: ["search_recommendation", "price_alert", "stock_alert", "order_update", "promotion"] }).notNull(),
  title: varchar("title").notNull(),
  message: text("message").notNull(),
  isRead: boolean("is_read").default(false).notNull(),
  searchQuery: varchar("search_query"), // For search recommendations
  productId: varchar("product_id"), // Related product if applicable
  metadata: jsonb("metadata"), // Additional data like recommended products
  createdAt: timestamp("created_at").defaultNow().notNull(),
  readAt: timestamp("read_at"),
});

// Search activity tracking for personalized recommendations
export const searchActivities = pgTable("search_activities", {
  id: varchar("id").primaryKey(),
  userId: varchar("user_id"),
  searchQuery: text("search_query").notNull(),
  resultsCount: integer("results_count").default(0).notNull(),
  clickedProductId: varchar("clicked_product_id"),
  sessionId: varchar("session_id"),
  userAgent: text("user_agent"),
  ipAddress: varchar("ip_address"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

// Notification schemas and types
export const insertUserNotificationSchema = createInsertSchema(userNotifications).omit({
  id: true,
  createdAt: true,
});

export const insertSearchActivitySchema = createInsertSchema(searchActivities).omit({
  id: true,
  createdAt: true,
});

export type UserNotification = typeof userNotifications.$inferSelect;
export type InsertUserNotification = z.infer<typeof insertUserNotificationSchema>;
export type SearchActivity = typeof searchActivities.$inferSelect;
export type InsertSearchActivity = z.infer<typeof insertSearchActivitySchema>;

// Notification relations
export const userNotificationsRelations = relations(userNotifications, ({ one }) => ({
  user: one(users, {
    fields: [userNotifications.userId],
    references: [users.id],
  }),
  product: one(products, {
    fields: [userNotifications.productId],
    references: [products.id],
  }),
}));

export const searchActivitiesRelations = relations(searchActivities, ({ one }) => ({
  user: one(users, {
    fields: [searchActivities.userId],
    references: [users.id],
  }),
  clickedProduct: one(products, {
    fields: [searchActivities.clickedProductId],
    references: [products.id],
  }),
}));


// ========== MAIN ROUTES ==========
import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import Stripe from "stripe";
import { storage } from "./storage";
import { setupAuth, isAuthenticated } from "./auth";
import { insertProductSchema, insertOrderSchema, insertCommissionOverrideSchema, User, users } from "@shared/schema";
import { db } from "./db";
import { eq } from "drizzle-orm";
import { z } from "zod";
import { registerAnalyticsRoutes } from "./routes/analytics";
import { registerMarketIntelligenceRoutes } from "./routes/market-intelligence";
import { registerLiveStreamingRoutes } from "./routes/live-streaming";
import { registerInventoryRoutes } from "./routes/inventory";
import { registerOrderRoutes } from "./routes/orders";
import { registerCustomerRoutes } from "./routes/customer-management";
import { registerSearchNotificationRoutes } from "./routes/search-notifications";
import { customsRouter } from "./routes/customs";
import { securityMiddleware } from "./middleware/security";
import { authSecurity } from "./middleware/auth-security";
import { databaseSecurity } from "./middleware/database-security";
import { amazonLevelSecurity } from "./middleware/advanced-security";
import { initializeDemoProducts } from "./init-demo-products";
import { setupFBMRoutes } from "./routes/fbm";
import { setup2FARoutes } from "./routes/two-factor-auth";

interface AuthenticatedRequest extends Request {
  user: User;
  isAuthenticated(): this is AuthenticatedRequest;
}

// Initialize Stripe only if secret key is available
let stripe: Stripe | null = null;
if (process.env.STRIPE_SECRET_KEY) {
  stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
    apiVersion: "2025-06-30.basil",
  });
}

export async function registerRoutes(app: Express): Promise<Server> {
  // Apply fortress-level security middleware with Amazon-level protection
  app.use(securityMiddleware.securityHeaders);
  app.use(securityMiddleware.securityLogger);
  app.use(securityMiddleware.xssProtection);
  app.use(authSecurity.enhanceSessionSecurity);
  app.use(amazonLevelSecurity.ddosProtection(500)); // Allow 500 requests per minute for normal operation
  
  // Apply WAF rules only to API endpoints to avoid blocking static content
  app.use('/api', amazonLevelSecurity.wafRules);

  // Apply rate limiting to different routes
  app.use('/api/auth', securityMiddleware.authRateLimit);
  app.use('/api', securityMiddleware.apiRateLimit);
  app.use(securityMiddleware.generalRateLimit);

  // Download route for project files
  app.get('/download-project', (req, res) => {
    const path = require('path');
    const fs = require('fs');
    const filePath = path.join(process.cwd(), 'oniwyze-working-download.zip');
    
    if (fs.existsSync(filePath)) {
      res.setHeader('Content-Disposition', 'attachment; filename="oniwyze-project.zip"');
      res.setHeader('Content-Type', 'application/zip');
      res.download(filePath, 'oniwyze-project.zip');
    } else {
      res.status(404).send('File not found');
    }
  });

  // Auth middleware
  setupAuth(app);

  // Register FBM and 2FA routes
  setupFBMRoutes(app);
  setup2FARoutes(app);

  // Register analytics routes
  registerAnalyticsRoutes(app);
  
  // Register market intelligence routes
  registerMarketIntelligenceRoutes(app);
  
  // Register live streaming routes
  registerLiveStreamingRoutes(app);
  
  // Register inventory routes with security
  registerInventoryRoutes(app);
  
  // Register order routes with security
  registerOrderRoutes(app);
  
  // Register customer management routes with Amazon-level security
  registerCustomerRoutes(app);

  // Register search notification routes
  registerSearchNotificationRoutes(app);

  // Add search tracking endpoint for notification system
  app.post('/api/search-track', async (req: Request, res: Response) => {
    try {
      const { searchQuery, resultsCount, sessionId } = req.body;
      
      // Track search activity 
      await storage.createSearchActivity({
        userId: (req as any).user?.id || null,
        searchQuery,
        resultsCount: resultsCount || 0,
        sessionId: sessionId || 'anonymous'
      });

      // Create notification for registered users
      if ((req as any).user?.id) {
        await storage.createUserNotification({
          userId: (req as any).user.id,
          title: "🎯 We found something you might like!",
          message: `Based on your search for "${searchQuery}", we've discovered ${resultsCount} amazing products that match your interests. Check them out!`,
          type: "search_recommendation"
        });
      }

      res.json({ success: true, message: "Search tracked successfully" });
    } catch (error) {
      console.error('Search tracking error:', error);
      res.status(500).json({ error: "Failed to track search" });
    }
  });

  // Register customs calculation routes
  app.use('/api/customs', customsRouter);

  // Initialize demo products for showcase
  if (process.env.NODE_ENV === 'development') {
    setTimeout(async () => {
      await initializeDemoProducts();
    }, 3000); // Wait 3 seconds for server to be ready
  }

  // Auth routes - these are now handled in auth.ts
  // /api/register, /api/login, /api/logout, /api/user

  // Products API endpoint
  app.get('/api/products', async (req: Request, res: Response) => {
    try {
      const products = await storage.getProducts();
      res.json(products || []);
    } catch (error) {
      console.error('Error fetching products:', error);
      // Return demo data if database fails
      res.json([
        {
          id: "demo-1",
          name: "Premium Wireless Headphones",
          description: "High-quality wireless headphones with noise cancellation and 30-hour battery life.",
          price: "149.99",
          category: "Electronics",
          imageUrl: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=400&fit=crop",
          supplierId: "demo-supplier-1",
          inventory: 50
        },
        {
          id: "demo-2", 
          name: "Smart Fitness Watch",
          description: "Advanced fitness tracking with heart rate monitoring and GPS.",
          price: "299.99",
          category: "Electronics",
          imageUrl: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=500&h=400&fit=crop",
          supplierId: "demo-supplier-1",
          inventory: 30
        },
        {
          id: "demo-3",
          name: "Organic Cotton T-Shirt", 
          description: "Comfortable sustainable organic cotton t-shirt available in multiple colors.",
          price: "29.99",
          category: "Fashion",
          imageUrl: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&h=400&fit=crop",
          supplierId: "demo-supplier-2",
          inventory: 100
        },
        {
          id: "demo-4",
          name: "Professional Coffee Machine",
          description: "Barista-quality espresso machine with 15-bar pressure and milk frother.",
          price: "449.99", 
          category: "Home & Garden",
          imageUrl: "https://images.unsplash.com/photo-1559496417-e7f25cb247f3?w=500&h=400&fit=crop",
          supplierId: "demo-supplier-1",
          inventory: 15
        },
        {
          id: "demo-5",
          name: "Luxury Leather Handbag",
          description: "Handcrafted genuine leather handbag with elegant design and multiple compartments.",
          price: "189.99",
          category: "Fashion",
          imageUrl: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=500&h=400&fit=crop", 
          supplierId: "demo-supplier-2",
          inventory: 25
        }
      ]);


// ========== AUTHENTICATION ==========
import passport from "passport";
import { Strategy as LocalStrategy } from "passport-local";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import { Strategy as FacebookStrategy } from "passport-facebook";
import { Express } from "express";
import session from "express-session";
import { scrypt, randomBytes, timingSafeEqual } from "crypto";
import { promisify } from "util";
import { storage } from "./storage";
import { User as SelectUser, InsertUser } from "@shared/schema";
import connectPg from "connect-pg-simple";

declare global {
  namespace Express {
    interface User extends SelectUser {}
  }
}

// Extend session data type to include our custom properties
declare module "express-session" {
  interface SessionData {
    emailVerificationCode?: string;
    pendingUserId?: string;
  }
}

const scryptAsync = promisify(scrypt);

async function hashPassword(password: string) {
  const salt = randomBytes(16).toString("hex");
  const buf = (await scryptAsync(password, salt, 64)) as Buffer;
  return `${buf.toString("hex")}.${salt}`;
}

async function comparePasswords(supplied: string, stored: string) {
  const [hashed, salt] = stored.split(".");
  const hashedBuf = Buffer.from(hashed, "hex");
  const suppliedBuf = (await scryptAsync(supplied, salt, 64)) as Buffer;
  return timingSafeEqual(hashedBuf, suppliedBuf);
}

export function setupAuth(app: Express) {
  const sessionTtl = 7 * 24 * 60 * 60 * 1000; // 1 week
  const pgStore = connectPg(session);
  
  const sessionStore = new pgStore({
    conString: process.env.DATABASE_URL,
    createTableIfMissing: true,
    ttl: sessionTtl,
    tableName: "sessions",
  });

  const sessionSecret = process.env.SESSION_SECRET || "oni-marketplace-dev-secret-" + Date.now();
  
  const sessionSettings: session.SessionOptions = {
    secret: sessionSecret,
    resave: false,
    saveUninitialized: false,
    store: sessionStore,
    cookie: {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: sessionTtl,
    },
  };

  app.set("trust proxy", 1);
  app.use(session(sessionSettings));
  app.use(passport.initialize());
  app.use(passport.session());

  passport.use(
    new LocalStrategy(
      { usernameField: "email" },
      async (email, password, done) => {
        try {
          const user = await storage.getUserByEmail(email);
          if (!user || !user.password || !(await comparePasswords(password, user.password))) {
            return done(null, false);
          }
          return done(null, user);
        } catch (error) {
          return done(error);
        }
      }
    )
  );

  // Google OAuth Strategy - only register if credentials are provided
  if (process.env.GOOGLE_CLIENT_ID && process.env.GOOGLE_CLIENT_SECRET) {
    // Use the current workspace domain
    const currentDomain = process.env.REPLIT_DOMAINS?.split(',')[0] || 'localhost:5000';
    const callbackURL = process.env.NODE_ENV === 'production' 
      ? "https://oniwyze.com/api/auth/google/callback"
      : `https://${currentDomain}/api/auth/google/callback`;
    
    console.log("Google OAuth callback URL:", callbackURL);
    
    passport.use(
      new GoogleStrategy(


// ========== MAIN PAGES ==========
// HOME PAGE
import { useState } from "react";
import { useAuth } from "@/hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { apiRequest, queryClient } from "@/lib/queryClient";
import { Store, Settings, Users, Sparkles, Zap } from "lucide-react";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import ProductCard from "@/components/product-card";
import EmptyState from "@/components/empty-state";
import SocialProof from "@/components/social-proof";
import SmartRecommendations from "@/components/smart-recommendations";
import { GermanyNotice, ExpansionBanner } from "@/components/germany-notice";

// Import new feature components
import ProductRecommendations from "@/components/features/product-recommendations";
import LivePriceTracker from "@/components/features/live-price-tracker";
import MarketplaceStats from "@/components/features/marketplace-stats";
import SmartNotifications from "@/components/features/smart-notifications";
import CurrencyConverter from "@/components/features/currency-converter";
import AdvancedSearch from "@/components/features/advanced-search";
import SellerSpotlight from "@/components/features/seller-spotlight";

export default function Home() {
  const { user, isLoading } = useAuth();
  const { toast } = useToast();
  const [selectedRole, setSelectedRole] = useState<string>("");

  const { data: products = [], isLoading: productsLoading } = useQuery({
    queryKey: ["/api/products"],
    retry: false,
  });

  // This component is only rendered for authenticated users due to App.tsx routing

  const handleRoleUpdate = async () => {
    if (!selectedRole) return;

    try {
      await apiRequest("POST", "/api/update-role", { role: selectedRole });
      toast({
        title: "Role Updated",
        description: `Your role has been updated to ${selectedRole}`,
      });
      // Refresh user data instead of full page reload
      queryClient.invalidateQueries({ queryKey: ["/api/user"] });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to update role",
        variant: "destructive",
      });
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center">
        <div className="animate-spin w-8 h-8 border-4 border-yellow-500 border-t-transparent rounded-full" />
      </div>
    );
  }

  if (!user) {
    // This shouldn't happen due to App.tsx routing, but just in case
    return <Link href="/auth"><div>Please sign in</div></Link>;
  }

  // Show role selection if user doesn't have a role set
  if (!user.role) {
    return (
      <div className="min-h-[80vh] bg-gray-50">
        <ExpansionBanner />
        <Header />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center mb-4">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">
              Welcome to <span className="text-yellow-500">ONIWYZE</span>
            </h1>
            <p className="text-xl text-gray-600 mb-3">
              Choose your role to get started
            </p>
            
            {/* Germany Notice */}
            <div className="max-w-2xl mx-auto mb-4">
              <GermanyNotice />
            </div>
            
            <p className="text-lg text-gray-600">
              Currently available in Germany only. EU expansion planned for Q3 2024.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            <Card 

// LANDING PAGE
import { useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Store, ShoppingCart, Handshake, Upload, TrendingUp, Gift, Percent, Users, Mail, BarChart3, CreditCard, Search, Smartphone, Sparkles, Globe } from "lucide-react";
import MobileOptimizedHeader from "@/components/layout/mobile-optimized-header";
import Footer from "@/components/layout/footer";
import LiveChat from "@/components/live-chat";
import SEOHead from "@/components/seo-head";
import BlogSection from "@/components/blog-section";
import TrustSignals from "@/components/trust-signals";
import AISearch from "@/components/ai-search";
import SmartRecommendations from "@/components/smart-recommendations";
import LiveCommerce from "@/components/live-commerce";
import SocialProof from "@/components/social-proof";
// Removed Germany restrictions - platform now available globally
import logoImage from "@assets/Screenshot 2025-07-16 130004_1752694208880.png";

export default function Landing() {
  return (
    <div className="min-h-[80vh] bg-gray-50">
      <SEOHead
        title="ONIWYZE - Global Marketplace for Sellers | 10% Commission"
        description="Join ONIWYZE, the revolutionary global marketplace. Pay only 10% commission vs competitors' 17%. Connect with customers worldwide and grow your business."
        keywords="global marketplace, sellers, wholesale, e-commerce, low commission, online selling, manufacturers"
      />
      {/* Global marketplace - no geographic restrictions */}
      <MobileOptimizedHeader />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-white via-yellow-50 to-white">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-6 sm:py-8">
          <div className="text-center">
            <div className="flex justify-center mb-4 sm:mb-6">
              <img 
                src={logoImage} 
                alt="ONI Logo" 
                className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-xl shadow-lg"
              />
            </div>
            <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-2 sm:mb-3">
              <span className="flex items-center justify-center gap-2 flex-wrap">
                <Sparkles className="text-yellow-500" size={24} />
                <span className="leading-tight">Experience AI-Powered Shopping</span>
              </span>
            </h1>
            <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 max-w-2xl mx-auto leading-relaxed">
              Search with natural language, voice, or images. Our AI understands what you're looking for and connects you with global sellers.
            </p>
            
            {/* AI Search Bar - Mobile Optimized */}
            <div className="max-w-3xl mx-auto mb-4 sm:mb-6">
              <div className="relative flex items-center bg-white rounded-2xl border-2 border-gray-200 focus-within:border-yellow-500 transition-colors shadow-sm">
                <Search className="absolute left-3 sm:left-4 text-gray-400" size={18} />
                <input
                  type="text"
                  placeholder="Try: 'wireless headphones under €100'"
                  className="w-full pl-10 sm:pl-12 pr-20 sm:pr-32 py-3 sm:py-4 bg-transparent rounded-2xl focus:outline-none text-gray-700 text-sm sm:text-base"
                />
                <Button 
                  className="absolute right-1 sm:right-2 bg-yellow-500 hover:bg-yellow-600 text-white rounded-xl px-3 sm:px-6 py-2 text-xs sm:text-sm font-medium shadow-sm"
                >
                  <Sparkles className="mr-1" size={14} />
                  <span className="hidden sm:inline">AI Search</span>
                  <span className="sm:hidden">Search</span>
                </Button>
              </div>
            </div>
            
            {/* Global Marketplace Badge */}
            <div className="max-w-xl mx-auto mb-4 sm:mb-6">
              <Badge className="bg-green-500 text-white px-4 py-2 text-sm">
                <Globe className="w-4 h-4 mr-2" />
                Available in 48 Countries Worldwide
              </Badge>
            </div>
            
            {/* Quick Action Buttons - Mobile Optimized */}
            <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 mb-4 sm:mb-6 max-w-md sm:max-w-none mx-auto">
              <Link href="/seller-registration">
                <Button 
                  className="w-full sm:w-auto bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-3 text-sm font-medium rounded-full shadow-md hover:shadow-lg transition-all"
                >
                  <Store className="mr-2 h-4 w-4" />
                  Start Selling Today
                </Button>
              </Link>
              <Link href="/enhanced-products">
                <Button 
                  variant="outline" 
                  className="w-full sm:w-auto px-8 py-3 text-sm font-medium border-2 border-yellow-500 text-yellow-600 hover:bg-yellow-50 rounded-full transition-all"
                >
                  <ShoppingCart className="mr-2 h-4 w-4" />
                  Explore Products
                </Button>
              </Link>
            </div>
            
            {/* Commission Info - Mobile Optimized */}

// PRODUCTS PAGE
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { type Product } from "@shared/schema";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, Filter, Grid3X3, List } from "lucide-react";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import EnhancedProductCard from "@/components/enhanced-product-card";
import CategoryNavigation from "@/components/category-navigation";
import EmptyState from "@/components/empty-state";

export default function Products() {
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");
  const [sortBy, setSortBy] = useState("newest");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  const { data: products, isLoading } = useQuery<Product[]>({
    queryKey: ["/api/products"],
    retry: false,
  });

  const filteredAndSortedProducts = products?.filter((product: Product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description?.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = !categoryFilter || product.category === categoryFilter || categoryFilter === "";
    return matchesSearch && matchesCategory;
  }).sort((a: Product, b: Product) => {
    switch (sortBy) {
      case "price-low":
        return parseFloat(a.price) - parseFloat(b.price);
      case "price-high":
        return parseFloat(b.price) - parseFloat(a.price);
      case "name":
        return a.name.localeCompare(b.name);
      default:
        return new Date(b.createdAt || b.updatedAt || '').getTime() - new Date(a.createdAt || a.updatedAt || '').getTime();
    }
  });

  const categories = Array.from(new Set(products?.map((p: Product) => p.category).filter(Boolean)));

  return (
    <div className="min-h-[100vh] bg-gray-50">
      <Header />
      
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8">
        <div className="mb-4 sm:mb-6">
          <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-2">Products</h1>
          <p className="text-sm sm:text-base text-gray-600">Discover products from sellers worldwide</p>
        </div>

        {/* Category Navigation */}
        <div className="bg-white rounded-lg p-4 shadow-sm mb-4 sm:mb-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Browse Categories</h2>
          <CategoryNavigation 
            onCategorySelect={setCategoryFilter}
            selectedCategory={categoryFilter}
            layout="horizontal"
          />
        </div>

        {/* Mobile-Optimized Search and Filter */}
        <Card className="mb-4 sm:mb-6 border-0 shadow-sm">
          <CardContent className="p-3 sm:p-4 lg:p-6">
            <div className="space-y-3 sm:space-y-4">
              {/* Search Bar */}
              <div className="relative">
                <Search className="absolute left-3 top-3.5 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Search products..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 py-3 text-base bg-white border-gray-200 focus:border-yellow-500 focus:ring-yellow-500"
                />
              </div>
              
              {/* Filters - Mobile Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                  <SelectTrigger className="w-full py-3 bg-white border-gray-200 focus:border-yellow-500">
                    <SelectValue placeholder="All Categories" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Categories</SelectItem>
                    {categories.map((category) => (
                      <SelectItem key={category} value={category || ""}>
                        {category}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-full py-3 bg-white border-gray-200 focus:border-yellow-500">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>


// ========== UI COMPONENTS ==========
// resizable.tsx
"use client"

import { GripVertical } from "lucide-react"
import * as ResizablePrimitive from "react-resizable-panels"

import { cn } from "@/lib/utils"

const ResizablePanelGroup = ({
  className,
  ...props
}: React.ComponentProps<typeof ResizablePrimitive.PanelGroup>) => (
  <ResizablePrimitive.PanelGroup
    className={cn(
      "flex h-full w-full data-[panel-group-direction=vertical]:flex-col",
      className
    )}
    {...props}
  />
)

const ResizablePanel = ResizablePrimitive.Panel

const ResizableHandle = ({
  withHandle,
  className,
  ...props
}: React.ComponentProps<typeof ResizablePrimitive.PanelResizeHandle> & {
  withHandle?: boolean
}) => (
  <ResizablePrimitive.PanelResizeHandle
    className={cn(
      "relative flex w-px items-center justify-center bg-border after:absolute after:inset-y-0 after:left-1/2 after:w-1 after:-translate-x-1/2 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-1 data-[panel-group-direction=vertical]:h-px data-[panel-group-direction=vertical]:w-full data-[panel-group-direction=vertical]:after:left-0 data-[panel-group-direction=vertical]:after:h-1 data-[panel-group-direction=vertical]:after:w-full data-[panel-group-direction=vertical]:after:-translate-y-1/2 data-[panel-group-direction=vertical]:after:translate-x-0 [&[data-panel-group-direction=vertical]>div]:rotate-90",
      className
    )}
    {...props}
  >
    {withHandle && (
      <div className="z-10 flex h-4 w-3 items-center justify-center rounded-sm border bg-border">
        <GripVertical className="h-2.5 w-2.5" />
      </div>
    )}
  </ResizablePrimitive.PanelResizeHandle>
)

export { ResizablePanelGroup, ResizablePanel, ResizableHandle }

// breadcrumb.tsx
import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { ChevronRight, MoreHorizontal } from "lucide-react"

import { cn } from "@/lib/utils"

const Breadcrumb = React.forwardRef<
  HTMLElement,
  React.ComponentPropsWithoutRef<"nav"> & {
    separator?: React.ReactNode
  }
>(({ ...props }, ref) => <nav ref={ref} aria-label="breadcrumb" {...props} />)
Breadcrumb.displayName = "Breadcrumb"

const BreadcrumbList = React.forwardRef<
  HTMLOListElement,
  React.ComponentPropsWithoutRef<"ol">
>(({ className, ...props }, ref) => (
  <ol
    ref={ref}
    className={cn(
      "flex flex-wrap items-center gap-1.5 break-words text-sm text-muted-foreground sm:gap-2.5",
      className
    )}
    {...props}
  />
))
BreadcrumbList.displayName = "BreadcrumbList"

const BreadcrumbItem = React.forwardRef<
  HTMLLIElement,
  React.ComponentPropsWithoutRef<"li">
>(({ className, ...props }, ref) => (
  <li
    ref={ref}
    className={cn("inline-flex items-center gap-1.5", className)}
    {...props}
  />
))
BreadcrumbItem.displayName = "BreadcrumbItem"

const BreadcrumbLink = React.forwardRef<
  HTMLAnchorElement,
  React.ComponentPropsWithoutRef<"a"> & {
    asChild?: boolean
  }
>(({ asChild, className, ...props }, ref) => {
  const Comp = asChild ? Slot : "a"

  return (

// separator.tsx
import * as React from "react"
import * as SeparatorPrimitive from "@radix-ui/react-separator"

import { cn } from "@/lib/utils"

const Separator = React.forwardRef<
  React.ElementRef<typeof SeparatorPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SeparatorPrimitive.Root>
>(
  (
    { className, orientation = "horizontal", decorative = true, ...props },
    ref
  ) => (
    <SeparatorPrimitive.Root
      ref={ref}
      decorative={decorative}
      orientation={orientation}
      className={cn(
        "shrink-0 bg-border",
        orientation === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]",
        className
      )}
      {...props}
    />
  )
)
Separator.displayName = SeparatorPrimitive.Root.displayName

export { Separator }

// popover.tsx
import * as React from "react"
import * as PopoverPrimitive from "@radix-ui/react-popover"

import { cn } from "@/lib/utils"

const Popover = PopoverPrimitive.Root

const PopoverTrigger = PopoverPrimitive.Trigger

const PopoverContent = React.forwardRef<
  React.ElementRef<typeof PopoverPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Content>
>(({ className, align = "center", sideOffset = 4, ...props }, ref) => (
  <PopoverPrimitive.Portal>
    <PopoverPrimitive.Content
      ref={ref}
      align={align}
      sideOffset={sideOffset}
      className={cn(
        "z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-[--radix-popover-content-transform-origin]",
        className
      )}
      {...props}
    />
  </PopoverPrimitive.Portal>
))
PopoverContent.displayName = PopoverPrimitive.Content.displayName

export { Popover, PopoverTrigger, PopoverContent }

// toast.tsx
import * as React from "react"
import * as ToastPrimitives from "@radix-ui/react-toast"
import { cva, type VariantProps } from "class-variance-authority"
import { X } from "lucide-react"

import { cn } from "@/lib/utils"

const ToastProvider = ToastPrimitives.Provider

const ToastViewport = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Viewport>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Viewport>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Viewport
    ref={ref}
    className={cn(
      "fixed top-0 z-[100] flex max-h-[80vh] w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",
      className
    )}
    {...props}
  />
))
ToastViewport.displayName = ToastPrimitives.Viewport.displayName

const toastVariants = cva(
  "group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",
  {
    variants: {
      variant: {
        default: "border bg-background text-foreground",
        destructive:
          "destructive group border-destructive bg-destructive text-destructive-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

const Toast = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Root> &
    VariantProps<typeof toastVariants>
>(({ className, variant, ...props }, ref) => {
  return (
    <ToastPrimitives.Root
      ref={ref}
      className={cn(toastVariants({ variant }), className)}
      {...props}


// ========== HOOKS ==========
// use-toast.ts
import * as React from "react"

import type {
  ToastActionElement,
  ToastProps,
} from "@/components/ui/toast"

const TOAST_LIMIT = 1
const TOAST_REMOVE_DELAY = 1000000

type ToasterToast = ToastProps & {
  id: string
  title?: React.ReactNode
  description?: React.ReactNode
  action?: ToastActionElement
}

const actionTypes = {
  ADD_TOAST: "ADD_TOAST",
  UPDATE_TOAST: "UPDATE_TOAST",
  DISMISS_TOAST: "DISMISS_TOAST",
  REMOVE_TOAST: "REMOVE_TOAST",
} as const

let count = 0

function genId() {
  count = (count + 1) % Number.MAX_SAFE_INTEGER
  return count.toString()
}

type ActionType = typeof actionTypes

type Action =
  | {
      type: ActionType["ADD_TOAST"]
      toast: ToasterToast
    }
  | {
      type: ActionType["UPDATE_TOAST"]
      toast: Partial<ToasterToast>
    }
  | {
      type: ActionType["DISMISS_TOAST"]
      toastId?: ToasterToast["id"]
    }
  | {
      type: ActionType["REMOVE_TOAST"]
      toastId?: ToasterToast["id"]
    }

// useAuth.ts
import { useQuery, useMutation } from "@tanstack/react-query";
import { type User } from "@shared/schema";
import { getQueryFn, apiRequest, queryClient } from "@/lib/queryClient";

export function useAuth() {
  const { data: user, isLoading } = useQuery<User>({
    queryKey: ["/api/user"],
    queryFn: getQueryFn({ on401: "returnNull" }),
    retry: false,
  });

  const logoutMutation = useMutation({
    mutationFn: async () => {
      await apiRequest("POST", "/api/logout");
    },
    onSuccess: () => {
      queryClient.setQueryData(["/api/user"], null);
      // Force page reload to ensure clean state
      window.location.href = "/";
    },
  });

  return {
    user,
    isLoading,
    isAuthenticated: !!user,
    logout: logoutMutation.mutate,
    isLoggingOut: logoutMutation.isPending,
  };
}

// use-mobile.tsx
import * as React from "react"

const MOBILE_BREAKPOINT = 768

export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState<boolean | undefined>(undefined)

  React.useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`)
    const onChange = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
    }
    mql.addEventListener("change", onChange)
    setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
    return () => mql.removeEventListener("change", onChange)
  }, [])

  return !!isMobile
}



/* ============================================
   COMPLETE PROJECT STRUCTURE:
   ============================================
client/src/hooks/use-toast.ts
client/src/hooks/useAuth.ts
client/src/hooks/use-mobile.tsx
client/src/hooks/useCustomsFees.ts
client/src/hooks/useLanguage.ts
client/src/hooks/useGeolocation.ts
client/src/components/ui/resizable.tsx
client/src/components/ui/breadcrumb.tsx
client/src/components/ui/separator.tsx
client/src/components/ui/popover.tsx
client/src/components/ui/toast.tsx
client/src/components/ui/calendar.tsx
client/src/components/ui/button.tsx
client/src/components/ui/drawer.tsx
client/src/components/ui/skeleton.tsx
client/src/components/ui/form.tsx
client/src/components/ui/radio-group.tsx
client/src/components/ui/toggle.tsx
client/src/components/ui/input.tsx
client/src/components/ui/checkbox.tsx
client/src/components/ui/badge.tsx
client/src/components/ui/chart.tsx
client/src/components/ui/menubar.tsx
client/src/components/ui/tabs.tsx
client/src/components/ui/switch.tsx
client/src/components/ui/dropdown-menu.tsx
client/src/components/ui/context-menu.tsx
client/src/components/ui/command.tsx
client/src/components/ui/input-otp.tsx
client/src/components/ui/accordion.tsx
client/src/components/ui/hover-card.tsx
client/src/components/ui/collapsible.tsx
client/src/components/ui/table.tsx
client/src/components/ui/scroll-area.tsx
client/src/components/ui/toaster.tsx
client/src/components/ui/alert.tsx
client/src/components/ui/select.tsx
client/src/components/ui/toggle-group.tsx
client/src/components/ui/label.tsx
client/src/components/ui/alert-dialog.tsx
client/src/components/ui/tooltip.tsx
client/src/components/ui/pagination.tsx
client/src/components/ui/aspect-ratio.tsx
client/src/components/ui/navigation-menu.tsx
client/src/components/ui/dialog.tsx
client/src/components/ui/sheet.tsx
client/src/components/ui/sidebar.tsx
client/src/components/ui/carousel.tsx
client/src/components/ui/card.tsx
client/src/components/ui/textarea.tsx

   ... and 422 more files!

   For complete source code download:
   oniwyze-project.tar.gz (687 KB)
   */

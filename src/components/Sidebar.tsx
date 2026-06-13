import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <aside className="w-72 bg-white border-r min-h-screen flex flex-col justify-between">
      <div>
        <div className="p-8 border-b">
          <h1 className="text-3xl font-bold text-slate-900">
            Admin Dashboard
          </h1>
        </div>

        <nav className="p-5 space-y-3">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `flex items-center gap-3 p-4 rounded-xl text-lg transition ${
                isActive
                  ? "bg-blue-50 text-blue-600 font-semibold"
                  : "text-slate-700 hover:bg-slate-100"
              }`
            }
          >
            📊 Dashboard
          </NavLink>

          <NavLink
            to="/products"
            className={({ isActive }) =>
              `flex items-center gap-3 p-4 rounded-xl text-lg transition ${
                isActive
                  ? "bg-blue-50 text-blue-600 font-semibold"
                  : "text-slate-700 hover:bg-slate-100"
              }`
            }
          >
            📦 Products
          </NavLink>

          <NavLink
            to="/orders"
            className={({ isActive }) =>
              `flex items-center gap-3 p-4 rounded-xl text-lg transition ${
                isActive
                  ? "bg-blue-50 text-blue-600 font-semibold"
                  : "text-slate-700 hover:bg-slate-100"
              }`
            }
          >
            🛒 Orders
          </NavLink>
        </nav>
      </div>

      <div className="p-6 border-t">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-lg">
            A
          </div>

          <div>
            <p className="font-semibold text-slate-800">
              Admin User
            </p>

            <p className="text-sm text-slate-500">
              admin@email.com
            </p>
          </div>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
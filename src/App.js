import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Items from "./components/Items";
import Contact from './components/Contact';
import Reviews from './components/Reviews';
import Location from './components/Location';
import Profile from './components/Profile';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: [],
      user: null,
      items: [
        {
          id: 1,
          title: 'Утка в соусе',
          img: 'ytka.jpg',
          desc: 'Самый лучший рецепт от Повара мирового уровня со звездой мишлен Болат',
          category: 'food',
          price: '35.99'
        },
        {
          id: 2,
          title: 'Паста Карбонара',
          img: 'pasta_carbonara.jpg',
          desc: 'Традиционный итальянский рецепт пасты карбонара с беконом и пармезаном',
          category: 'food',
          price: '15.99'
        },
        {
          id: 3,
          title: 'Куриное филе в сливочном соусе',
          img: 'chicken_fillet.jpg',
          desc: 'Сочное куриное филе, приготовленное в сливочном соусе с чесноком',
          category: 'food',
          price: '18.99'
        },
        {
          id: 4,
          title: 'Том Ям',
          img: 'tom_yam.jpg',
          desc: 'Традиционный тайский суп Том Ям с креветками и ароматными специями',
          category: 'food',
          price: '12.99'
        },
        {
          id: 5,
          title: 'Говядина по-бургундски',
          img: 'beef_bourguignon.jpg',
          desc: 'Французское блюдо из тушеной говядины в красном вине с овощами',
          category: 'food',
          price: '29.99'
        },
        {
          id: 6,
          title: 'Ризотто с грибами',
          img: 'mushroom_risotto.jpg',
          desc: 'Кремовое ризотто с белыми грибами и пармезаном, приготовленное по итальянскому рецепту',
          category: 'food',
          price: '14.99'
        },
        {
          id: 7,
          title: 'Суши ассорти',
          img: 'sushi_assorti.jpg',
          desc: 'Набор свежих суши и роллов с различными видами рыбы и морепродуктов',
          category: 'food',
          price: '22.99'
        },
        {
          id: 8,
          title: 'Чизкейк Нью-Йорк',
          img: 'cheesecake_ny.jpg',
          desc: 'Классический чизкейк Нью-Йорк с нежной текстурой и насыщенным вкусом',
          category: 'dessert',
          price: '9.99'
        },
        {
          id: 9,
          title: 'Шоколадный фондан',
          img: 'chocolate_fondant.png',
          desc: 'Французский десерт с жидким шоколадным центром, подаваемый с ванильным мороженым',
          category: 'dessert',
          price: '8.99'
        }
      ]
    };
    this.addToOrder = this.addToOrder.bind(this);
    this.deleteOrder = this.deleteOrder.bind(this);
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
  }

  login(user) {
    this.setState({ user });
  }

  logout() {
    this.setState({ user: null });
  }

  deleteOrder(id) {
    this.setState({
      orders: this.state.orders.filter(el => el.id !== id)
    });
  }

  addToOrder(item) {
    let isInArray = false;
    this.state.orders.forEach(el => {
      if (el.id === item.id) {
        isInArray = true;
      }
    });

    if (!isInArray) {
      this.setState({ orders: [...this.state.orders, item] });
    }
  }

  render() {
    return (
        <Router>
          <div className="wrapper">
            <Header orders={this.state.orders} onDelete={this.deleteOrder} user={this.state.user} logout={this.logout} />
            <Routes>
              <Route path="/" element={<Items items={this.state.items} onAdd={this.addToOrder} />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/reviews" element={<Reviews />} />
              <Route path="/location" element={<Location />} />
              <Route path="/profile" element={<Profile user={this.state.user} orders={this.state.orders} login={this.login} />} />
            </Routes>
            <Footer />
          </div>
        </Router>
    );
  }
}

export default App;

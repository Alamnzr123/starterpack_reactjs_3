import React from "react";

const Home = () => {
    return (
        <React.Fragment>
            <body className="id v4">
                <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5QWVXV" height="0" width="0" style={{ visibility: 'hidden' }}></iframe></noscript>
                <div className="page_wrap _wrap">
                    <header className="normal smaller no_animation smaller subtle nav-down">
                        <div className="content">
                            <div className="sub_media">
                                <div className="nav_wrapper">
                                    <a className="logo" href="/" aria-label="Beranda">
                                        <img src="/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg" alt="The Movie Database (TMDB)" width="154" height="20" />
                                    </a>

                                    <ul className="dropdown_menu navigation primary k-widget k-reset k-header k-menu k-menu-horizontal" data-role="menu" tabIndex="0" role="menubar">
                                        <li aria-haspopup="true" className="k-item k-menu-item k-state-default k-first" role="menuitem">
                                            <a className="no_click k-link k-menu-link" href="/movie" aria-label="Film">Film<span className="k-menu-expand-arrow k-icon k-i-arrow-60-down"></span></a>

                                            <ul className="k-group k-menu-group" role="menu" aria-hidden="true">
                                                <li className="k-item k-menu-item k-state-default k-first" role="menuitem"><a href="/movie" aria-label="Populer" className="k-link k-menu-link">Populer</a></li>
                                                <li className="k-item k-menu-item k-state-default" role="menuitem"><a href="/movie/now-playing" aria-label="Sedang Diputar" className="k-link k-menu-link">Sedang Diputar</a></li>
                                                <li className="k-item k-menu-item k-state-default" role="menuitem"><a href="/movie/upcoming" aria-label="Mendatang" className="k-link k-menu-link">Mendatang</a></li>
                                                <li className="k-item k-menu-item k-state-default k-last" role="menuitem"><a href="/movie/top-rated" aria-label="Top Rating" className="k-link k-menu-link">Top Rating</a></li>
                                            </ul>
                                        </li>
                                        <li aria-haspopup="true" className="k-item k-menu-item k-state-default" role="menuitem">
                                            <a className="no_click k-link k-menu-link" href="/tv" aria-label="Serial TV">Serial TV<span className="k-menu-expand-arrow k-icon k-i-arrow-60-down"></span></a>

                                            <ul className="k-group k-menu-group" role="menu" aria-hidden="true">
                                                <li className="k-item k-menu-item k-state-default k-first" role="menuitem"><a href="/tv" aria-label="Populer" className="k-link k-menu-link">Populer</a></li>
                                                <li className="k-item k-menu-item k-state-default" role="menuitem"><a href="/tv/airing-today" aria-label="Sedang Tayang" className="k-link k-menu-link">Sedang Tayang</a></li>
                                                <li className="k-item k-menu-item k-state-default" role="menuitem"><a href="/tv/on-the-air" aria-label="Tayang di TV" className="k-link k-menu-link">Tayang di TV</a></li>
                                                <li className="k-item k-menu-item k-state-default k-last" role="menuitem"><a href="/tv/top-rated" aria-label="Top Rating" className="k-link k-menu-link">Top Rating</a></li>
                                            </ul>
                                        </li>
                                        <li aria-haspopup="true" className="k-item k-menu-item k-state-default" role="menuitem">
                                            <a className="no_click k-link k-menu-link" href="/person" aria-label="Orang">Orang<span className="k-menu-expand-arrow k-icon k-i-arrow-60-down"></span></a>

                                            <ul className="k-group k-menu-group" role="menu" aria-hidden="true">
                                                <li className="k-item k-menu-item k-state-default k-first k-last" role="menuitem"><a href="/person" aria-label="Orang Terpopuler" className="k-link k-menu-link">Orang Terpopuler</a></li>
                                            </ul>
                                        </li>
                                        <li aria-haspopup="true" className="k-item k-menu-item k-state-default k-last" role="menuitem">
                                            <a className="no_click k-link k-menu-link" href="#" aria-label="More">More<span className="k-menu-expand-arrow k-icon k-i-arrow-60-down"></span></a>

                                            <ul className="k-group k-menu-group" role="menu" aria-hidden="true">
                                                <li className="k-item k-menu-item k-state-default k-first" role="menuitem"><a href="/discuss" aria-label="Diskusi" className="k-link k-menu-link">Diskusi</a></li>
                                                <li className="k-item k-menu-item k-state-default" role="menuitem"><a href="/leaderboard" aria-label="Papan peringkat" className="k-link k-menu-link">Papan peringkat</a></li>
                                                <li className="k-item k-menu-item k-state-default" role="menuitem"><a href="/talk" aria-label="Dukungan" className="k-link k-menu-link">Dukungan</a></li>
                                                <li className="k-item k-menu-item k-state-default k-last" role="menuitem"><a href="https://developer.themoviedb.org/docs" target="_blank" aria-label="API" className="k-link k-menu-link">API</a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>

                                <div className="flex">
                                    <ul className="primary">
                                        <li className="glyph new_buttons" data-role="tooltip">
                                            <a className="new_icon no_click" href="#" aria-label="Create New Movie or TV Show">
                                                <span className="glyphicons_v2 plus white"></span>
                                            </a>
                                        </li>
                                        <li className="translate" data-role="tooltip">
                                            <div>id</div>
                                        </li>
                                        <li><a href="/login" aria-label="Masuk">Masuk</a></li>
                                        <li><a href="/signup" aria-label="Bergabung dengan TMDB">Bergabung dengan TMDB</a></li>

                                        <li className="glyph search_buttons">
                                            <a className="search" href="/search" aria-label="Search"><span className="glyphicons_v2 search blue"></span></a>
                                            <a className="close hide" href="/search" aria-label="Search"><span className="glyphicons_v2 menu-close invert svg"></span></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="search_bar hide">
                            <section className="search show_search_false">
                                <div className="sub_media">
                                    <form id="search_form" action="/search" method="get" acceptCharset="utf-8" >
                                        <label>
                                            <span tabIndex="-1" role="presentation" className="k-widget k-autocomplete k-autocomplete-clearable k-state-default"><input dir="auto" id="search_v4" name="query" type="text" autoCorrect="off" autofill="off" autocomplete="off" spellCheck="false" placeholder="Cari sebuah film, serial tv, kru / aktor" value="" data-role="autocomplete" className="k-input" role="textbox" aria-haspopup="true" aria-disabled="false" aria-readonly="false" aria-owns="search_v4_listbox" aria-autocomplete="list" /><span unselectable="on" className="k-clear-value k-hidden" title="clear" role="button" tabIndex="-1"><span className="k-icon k-i-x"></span></span><span className="k-icon k-i-loading k-hidden"></span></span>
                                        </label>
                                        <input type="submit" disabled="" />
                                    </form>
                                </div>
                            </section>
                        </div>
                        <div className="k-list-container k-popup k-group k-reset" id="search_v4-list" data-role="popup" aria-hidden="true" style={{ position: 'absolute' }}><div className="k-group-header" style={{ display: 'none' }}></div><div className="k-list-scroller" unselectable="on"><ul unselectable="on" className="k-list k-reset" tabIndex="-1" aria-hidden="true" id="search_v4_listbox" aria-live="polite" data-role="staticlist" role="listbox"></ul></div><div className="k-nodata" style={{ display: 'none' }}><div></div></div></div></header>


                    <main id="main" className="index">

                        <section className="inner_content new_index background_22">
                            <div id="media_v4" className="media discover">
                                <div className="column_wrapper">
                                    <div className="content_wrapper wrap">
                                        <div className="title">
                                            <h2>Selamat datang</h2>
                                            <h3>Millions of movies, TV shows and people to discover. Explore now.</h3>
                                        </div>

                                        <div className="search">
                                            <form id="inner_search_form" action="/search" method="get" acceptCharset="utf-8">
                                                <label>
                                                    <input dir="auto" id="inner_search_v4" name="query" type="text" autoCorrect="off" autofill="off" autocomplete="off" spellCheck="false" placeholder="Cari sebuah film, serial tv, kru / aktor..." value="" />
                                                </label>

                                                <input type="submit" value="Search" />
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>


                        <section className="inner_content trending no_pad">
                            <div className="column_wrapper">
                                <div className="content_wrapper wrap no_bottom_pad">
                                    <div className="column">
                                        <div className="column_header">
                                            <h2>Trending</h2>

                                            <div className="selector_wrap">
                                                <div className="selector">
                                                    <div className="anchor selected">
                                                        <h3 className="leading-5"><a href="#" className="no_click" data-panel="trending_scroller" data-group="today">Today <span className="glyphicons_v2 chevron-down"></span></a></h3>
                                                        <div className="background"></div>
                                                    </div>

                                                    <div className="anchor">
                                                        <h3 className="leading-5"><a href="#" className="no_click" data-panel="trending_scroller" data-group="this-week">This Week <span className="glyphicons_v2 chevron-down"></span></a></h3>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div id="trending_scroller" className="media discover scroller_wrap should_fade is_fading">
                                            <div className="column_content flex scroller loaded">      <div className="card style_1">
                                                <div className="image">
                                                    <div className="wrapper glyphicons_v2 picture grey no_image_holder">
                                                        <a className="image" href="/movie/1032823-trap" title="Trap">
                                                            <img loading="lazy" className="poster w-full" src="https://media.themoviedb.org/t/p/w220_and_h330_face/jwoaKYVqPgYemFpaANL941EF94R.jpg" srcSet="https://media.themoviedb.org/t/p/w220_and_h330_face/jwoaKYVqPgYemFpaANL941EF94R.jpg 1x, https://media.themoviedb.org/t/p/w440_and_h660_face/jwoaKYVqPgYemFpaANL941EF94R.jpg 2x" alt="Trap" />

                                                        </a>
                                                    </div>
                                                    <div className="options" data-id="1032823" data-object-id="63406718014325007f743acb" data-media-type="movie" data-role="tooltip">
                                                        <a className="no_click" href="#" aria-label="View Item Options"><div className="glyphicons_v2 circle-more white"></div></a>
                                                    </div>
                                                </div>

                                                <div className="content">
                                                    <div className="consensus tight">
                                                        <div className="outer_ring">
                                                            <div className="user_score_chart 63406718014325007f743acb" data-percent="65" data-track-color="#423d0f" data-bar-color="#d2d531">
                                                                <div className="percent">
                                                                    <span className="icon icon-r65"></span>
                                                                </div>
                                                                <canvas height="34" width="34"></canvas></div>
                                                        </div>
                                                    </div>

                                                    <h2><a href="/movie/1032823-trap" title="Trap">Trap</a></h2>
                                                    <p>Ags 07, 2024</p>
                                                </div>

                                                <div className="hover 1032823"></div>
                                            </div>

                                                <div className="card style_1">
                                                    <div className="image">
                                                        <div className="wrapper glyphicons_v2 picture grey no_image_holder">
                                                            <a className="image" href="/movie/365177-borderlands" title="Borderlands">
                                                                <img loading="lazy" className="poster w-full" src="https://media.themoviedb.org/t/p/w220_and_h330_face/865DntZzOdX6rLMd405R0nFkLmL.jpg" srcSet="https://media.themoviedb.org/t/p/w220_and_h330_face/865DntZzOdX6rLMd405R0nFkLmL.jpg 1x, https://media.themoviedb.org/t/p/w440_and_h660_face/865DntZzOdX6rLMd405R0nFkLmL.jpg 2x" alt="Borderlands" />

                                                            </a>
                                                        </div>
                                                        <div className="options" data-id="365177" data-object-id="562ba3739251410a22000849" data-media-type="movie" data-role="tooltip">
                                                            <a className="no_click" href="#" aria-label="View Item Options"><div className="glyphicons_v2 circle-more white"></div></a>
                                                        </div>
                                                    </div>

                                                    <div className="content">
                                                        <div className="consensus tight">
                                                            <div className="outer_ring">
                                                                <div className="user_score_chart 562ba3739251410a22000849" data-percent="57" data-track-color="#423d0f" data-bar-color="#d2d531">
                                                                    <div className="percent">
                                                                        <span className="icon icon-r57"></span>
                                                                    </div>
                                                                    <canvas height="34" width="34"></canvas></div>
                                                            </div>
                                                        </div>

                                                        <h2><a href="/movie/365177-borderlands" title="Borderlands">Borderlands</a></h2>
                                                        <p>Ags 09, 2024</p>
                                                    </div>

                                                    <div className="hover 365177"></div>
                                                </div>

                                                <div className="card style_1">
                                                    <div className="image">
                                                        <div className="wrapper glyphicons_v2 picture grey no_image_holder">
                                                            <a className="image" href="/tv/84773-the-lord-of-the-rings-the-rings-of-power" title="The Lord of the Rings: Cincin Kekuasaan">
                                                                <img loading="lazy" className="poster w-full" src="https://media.themoviedb.org/t/p/w220_and_h330_face/kEb1WTpbzUdzg1hCO4rfE0qcepk.jpg" srcSet="https://media.themoviedb.org/t/p/w220_and_h330_face/kEb1WTpbzUdzg1hCO4rfE0qcepk.jpg 1x, https://media.themoviedb.org/t/p/w440_and_h660_face/kEb1WTpbzUdzg1hCO4rfE0qcepk.jpg 2x" alt="The Lord of the Rings: Cincin Kekuasaan" />

                                                            </a>
                                                        </div>
                                                        <div className="options" data-id="84773" data-object-id="5c0aa907c3a368252004c4f5" data-media-type="tv" data-role="tooltip">
                                                            <a className="no_click" href="#" aria-label="View Item Options"><div className="glyphicons_v2 circle-more white"></div></a>
                                                        </div>
                                                    </div>

                                                    <div className="content">
                                                        <div className="consensus tight">
                                                            <div className="outer_ring">
                                                                <div className="user_score_chart 5c0aa907c3a368252004c4f5" data-percent="73" data-track-color="#204529" data-bar-color="#21d07a">
                                                                    <div className="percent">
                                                                        <span className="icon icon-r73"></span>
                                                                    </div>
                                                                    <canvas height="34" width="34"></canvas></div>
                                                            </div>
                                                        </div>

                                                        <h2><a href="/tv/84773-the-lord-of-the-rings-the-rings-of-power" title="The Lord of the Rings: Cincin Kekuasaan">The Lord of the Rings: Cincin Kekuasaan</a></h2>
                                                        <p>Sep 01, 2022</p>
                                                    </div>

                                                    <div className="hover 84773"></div>
                                                </div>

                                                <div className="card style_1">
                                                    <div className="image">
                                                        <div className="wrapper glyphicons_v2 picture grey no_image_holder">
                                                            <a className="image" href="/movie/917496-beetlejuice-beetlejuice" title="Beetlejuice Beetlejuice">
                                                                <img loading="lazy" className="poster w-full" src="https://media.themoviedb.org/t/p/w220_and_h330_face/2XMBScqx3UqBR8UT7WGbTs72lyG.jpg" srcSet="https://media.themoviedb.org/t/p/w220_and_h330_face/2XMBScqx3UqBR8UT7WGbTs72lyG.jpg 1x, https://media.themoviedb.org/t/p/w440_and_h660_face/2XMBScqx3UqBR8UT7WGbTs72lyG.jpg 2x" alt="Beetlejuice Beetlejuice" />

                                                            </a>
                                                        </div>
                                                        <div className="options" data-id="917496" data-object-id="61be274afa404600605eb4a7" data-media-type="movie" data-role="tooltip">
                                                            <a className="no_click" href="#" aria-label="View Item Options"><div className="glyphicons_v2 circle-more white"></div></a>
                                                        </div>
                                                    </div>

                                                    <div className="content">
                                                        <div className="consensus tight">
                                                            <div className="outer_ring">
                                                                <div className="user_score_chart 61be274afa404600605eb4a7" data-percent="76" data-track-color="#204529" data-bar-color="#21d07a">
                                                                    <div className="percent">
                                                                        <span className="icon icon-r76"></span>
                                                                    </div>
                                                                    <canvas height="34" width="34"></canvas></div>
                                                            </div>
                                                        </div>

                                                        <h2><a href="/movie/917496-beetlejuice-beetlejuice" title="Beetlejuice Beetlejuice">Beetlejuice Beetlejuice</a></h2>
                                                        <p>Sep 04, 2024</p>
                                                    </div>

                                                    <div className="hover 917496"></div>
                                                </div>

                                                <div className="card style_1">
                                                    <div className="image">
                                                        <div className="wrapper glyphicons_v2 picture grey no_image_holder">
                                                            <a className="image" href="/movie/930600-the-deliverance" title="The Deliverance">
                                                                <img loading="lazy" className="poster w-full" src="https://media.themoviedb.org/t/p/w220_and_h330_face/og1FteMFRInoQnlZeWqEn8XpXHh.jpg" srcSet="https://media.themoviedb.org/t/p/w220_and_h330_face/og1FteMFRInoQnlZeWqEn8XpXHh.jpg 1x, https://media.themoviedb.org/t/p/w440_and_h660_face/og1FteMFRInoQnlZeWqEn8XpXHh.jpg 2x" alt="The Deliverance" />

                                                            </a>
                                                        </div>
                                                        <div className="options" data-id="930600" data-object-id="61eee7ba9e4586009a00d02e" data-media-type="movie" data-role="tooltip">
                                                            <a className="no_click" href="#" aria-label="View Item Options"><div className="glyphicons_v2 circle-more white"></div></a>
                                                        </div>
                                                    </div>

                                                    <div className="content">
                                                        <div className="consensus tight">
                                                            <div className="outer_ring">
                                                                <div className="user_score_chart 61eee7ba9e4586009a00d02e" data-percent="64" data-track-color="#423d0f" data-bar-color="#d2d531">
                                                                    <div className="percent">
                                                                        <span className="icon icon-r64"></span>
                                                                    </div>
                                                                    <canvas height="34" width="34"></canvas></div>
                                                            </div>
                                                        </div>

                                                        <h2><a href="/movie/930600-the-deliverance" title="The Deliverance">The Deliverance</a></h2>
                                                        <p>Ags 30, 2024</p>
                                                    </div>

                                                    <div className="hover 930600"></div>
                                                </div>

                                                <div className="card style_1">
                                                    <div className="image">
                                                        <div className="wrapper glyphicons_v2 picture grey no_image_holder">
                                                            <a className="image" href="/tv/102621-kaos" title="KAOS">
                                                                <img loading="lazy" className="poster w-full" src="https://media.themoviedb.org/t/p/w220_and_h330_face/dDBTUSl3tRsOeKC1jZugBSFHy9I.jpg" srcSet="https://media.themoviedb.org/t/p/w220_and_h330_face/dDBTUSl3tRsOeKC1jZugBSFHy9I.jpg 1x, https://media.themoviedb.org/t/p/w440_and_h660_face/dDBTUSl3tRsOeKC1jZugBSFHy9I.jpg 2x" alt="KAOS" />

                                                            </a>
                                                        </div>
                                                        <div className="options" data-id="102621" data-object-id="5ea4bb0c3faba0001e467a44" data-media-type="tv" data-role="tooltip">
                                                            <a className="no_click" href="#" aria-label="View Item Options"><div className="glyphicons_v2 circle-more white"></div></a>
                                                        </div>
                                                    </div>

                                                    <div className="content">
                                                        <div className="consensus tight">
                                                            <div className="outer_ring">
                                                                <div className="user_score_chart 5ea4bb0c3faba0001e467a44" data-percent="73" data-track-color="#204529" data-bar-color="#21d07a">
                                                                    <div className="percent">
                                                                        <span className="icon icon-r73"></span>
                                                                    </div>
                                                                    <canvas height="34" width="34"></canvas></div>
                                                            </div>
                                                        </div>

                                                        <h2><a href="/tv/102621-kaos" title="KAOS">KAOS</a></h2>
                                                        <p>Ags 29, 2024</p>
                                                    </div>

                                                    <div className="hover 102621"></div>
                                                </div>

                                                <div className="card style_1">
                                                    <div className="image">
                                                        <div className="wrapper glyphicons_v2 picture grey no_image_holder">
                                                            <a className="image" href="/movie/1022789-inside-out-2" title="Inside Out 2">
                                                                <img loading="lazy" className="poster w-full" src="https://media.themoviedb.org/t/p/w220_and_h330_face/vpnVM9B6NMmQpWeZvzLvDESb2QY.jpg" srcSet="https://media.themoviedb.org/t/p/w220_and_h330_face/vpnVM9B6NMmQpWeZvzLvDESb2QY.jpg 1x, https://media.themoviedb.org/t/p/w440_and_h660_face/vpnVM9B6NMmQpWeZvzLvDESb2QY.jpg 2x" alt="Inside Out 2" />

                                                            </a>
                                                        </div>
                                                        <div className="options" data-id="1022789" data-object-id="631bd66867dcc90082814ca2" data-media-type="movie" data-role="tooltip">
                                                            <a className="no_click" href="#" aria-label="View Item Options"><div className="glyphicons_v2 circle-more white"></div></a>
                                                        </div>
                                                    </div>

                                                    <div className="content">
                                                        <div className="consensus tight">
                                                            <div className="outer_ring">
                                                                <div className="user_score_chart 631bd66867dcc90082814ca2" data-percent="77" data-track-color="#204529" data-bar-color="#21d07a">
                                                                    <div className="percent">
                                                                        <span className="icon icon-r77"></span>
                                                                    </div>
                                                                    <canvas height="34" width="34"></canvas></div>
                                                            </div>
                                                        </div>

                                                        <h2><a href="/movie/1022789-inside-out-2" title="Inside Out 2">Inside Out 2</a></h2>
                                                        <p>Jun 11, 2024</p>
                                                    </div>

                                                    <div className="hover 1022789"></div>
                                                </div>

                                                <div className="card style_1">
                                                    <div className="image">
                                                        <div className="wrapper glyphicons_v2 picture grey no_image_holder">
                                                            <a className="image" href="/tv/239287-terminator-anime" title="Terminator Zero">
                                                                <img loading="lazy" className="poster w-full" src="https://media.themoviedb.org/t/p/w220_and_h330_face/mBmY7qwBqF7x68wMSAlmvr0OIF2.jpg" srcSet="https://media.themoviedb.org/t/p/w220_and_h330_face/mBmY7qwBqF7x68wMSAlmvr0OIF2.jpg 1x, https://media.themoviedb.org/t/p/w440_and_h660_face/mBmY7qwBqF7x68wMSAlmvr0OIF2.jpg 2x" alt="Terminator Zero" />

                                                            </a>
                                                        </div>
                                                        <div className="options" data-id="239287" data-object-id="654ff2935c564e00c6efe8e7" data-media-type="tv" data-role="tooltip">
                                                            <a className="no_click" href="#" aria-label="View Item Options"><div className="glyphicons_v2 circle-more white"></div></a>
                                                        </div>
                                                    </div>

                                                    <div className="content">
                                                        <div className="consensus tight">
                                                            <div className="outer_ring">
                                                                <div className="user_score_chart 654ff2935c564e00c6efe8e7" data-percent="76" data-track-color="#204529" data-bar-color="#21d07a">
                                                                    <div className="percent">
                                                                        <span className="icon icon-r76"></span>
                                                                    </div>
                                                                    <canvas height="34" width="34"></canvas></div>
                                                            </div>
                                                        </div>

                                                        <h2><a href="/tv/239287-terminator-anime" title="Terminator Zero">Terminator Zero</a></h2>
                                                        <p>Ags 29, 2024</p>
                                                    </div>

                                                    <div className="hover 239287"></div>
                                                </div>

                                                <div className="card style_1">
                                                    <div className="image">
                                                        <div className="wrapper glyphicons_v2 picture grey no_image_holder">
                                                            <a className="image" href="/movie/1226578-longlegs" title="Longlegs">
                                                                <img loading="lazy" className="poster w-full" src="https://media.themoviedb.org/t/p/w220_and_h330_face/5aj8vVGFwGVbQQs26ywhg4Zxk2L.jpg" srcSet="https://media.themoviedb.org/t/p/w220_and_h330_face/5aj8vVGFwGVbQQs26ywhg4Zxk2L.jpg 1x, https://media.themoviedb.org/t/p/w440_and_h660_face/5aj8vVGFwGVbQQs26ywhg4Zxk2L.jpg 2x" alt="Longlegs" />

                                                            </a>
                                                        </div>
                                                        <div className="options" data-id="1226578" data-object-id="65976d50fad8e917f0c29f5c" data-media-type="movie" data-role="tooltip">
                                                            <a className="no_click" href="#" aria-label="View Item Options"><div className="glyphicons_v2 circle-more white"></div></a>
                                                        </div>
                                                    </div>

                                                    <div className="content">
                                                        <div className="consensus tight">
                                                            <div className="outer_ring">
                                                                <div className="user_score_chart 65976d50fad8e917f0c29f5c" data-percent="67" data-track-color="#423d0f" data-bar-color="#d2d531">
                                                                    <div className="percent">
                                                                        <span className="icon icon-r67"></span>
                                                                    </div>
                                                                    <canvas height="34" width="34"></canvas></div>
                                                            </div>
                                                        </div>

                                                        <h2><a href="/movie/1226578-longlegs" title="Longlegs">Longlegs</a></h2>
                                                        <p>Jul 17, 2024</p>
                                                    </div>

                                                    <div className="hover 1226578"></div>
                                                </div>

                                                <div className="card style_1">
                                                    <div className="image">
                                                        <div className="wrapper glyphicons_v2 picture grey no_image_holder">
                                                            <a className="image" href="/movie/945961-alien-romulus" title="Alien: Romulus">
                                                                <img loading="lazy" className="poster w-full" src="https://media.themoviedb.org/t/p/w220_and_h330_face/b33nnKl1GSFbao4l3fZDDqsMx0F.jpg" srcSet="https://media.themoviedb.org/t/p/w220_and_h330_face/b33nnKl1GSFbao4l3fZDDqsMx0F.jpg 1x, https://media.themoviedb.org/t/p/w440_and_h660_face/b33nnKl1GSFbao4l3fZDDqsMx0F.jpg 2x" alt="Alien: Romulus" />

                                                            </a>
                                                        </div>
                                                        <div className="options" data-id="945961" data-object-id="6222913cc2823a00421925c8" data-media-type="movie" data-role="tooltip">
                                                            <a className="no_click" href="#" aria-label="View Item Options"><div className="glyphicons_v2 circle-more white"></div></a>
                                                        </div>
                                                    </div>

                                                    <div className="content">
                                                        <div className="consensus tight">
                                                            <div className="outer_ring">
                                                                <div className="user_score_chart 6222913cc2823a00421925c8" data-percent="72" data-track-color="#204529" data-bar-color="#21d07a">
                                                                    <div className="percent">
                                                                        <span className="icon icon-r72"></span>
                                                                    </div>
                                                                    <canvas height="34" width="34"></canvas></div>
                                                            </div>
                                                        </div>

                                                        <h2><a href="/movie/945961-alien-romulus" title="Alien: Romulus">Alien: Romulus</a></h2>
                                                        <p>Ags 14, 2024</p>
                                                    </div>

                                                    <div className="hover 945961"></div>
                                                </div>

                                                <div className="card style_1">
                                                    <div className="image">
                                                        <div className="wrapper glyphicons_v2 picture grey no_image_holder">
                                                            <a className="image" href="/movie/533535-deadpool-wolverine" title="Deadpool &amp; Wolverine">
                                                                <img loading="lazy" className="poster w-full" src="https://media.themoviedb.org/t/p/w220_and_h330_face/8cdWjvZQUExUUTzyp4t6EDMubfO.jpg" srcSet="https://media.themoviedb.org/t/p/w220_and_h330_face/8cdWjvZQUExUUTzyp4t6EDMubfO.jpg 1x, https://media.themoviedb.org/t/p/w440_and_h660_face/8cdWjvZQUExUUTzyp4t6EDMubfO.jpg 2x" alt="Deadpool &amp; Wolverine" />

                                                            </a>
                                                        </div>
                                                        <div className="options" data-id="533535" data-object-id="5b3b6b8ec3a3684b8900d8fd" data-media-type="movie" data-role="tooltip">
                                                            <a className="no_click" href="#" aria-label="View Item Options"><div className="glyphicons_v2 circle-more white"></div></a>
                                                        </div>
                                                    </div>

                                                    <div className="content">
                                                        <div className="consensus tight">
                                                            <div className="outer_ring">
                                                                <div className="user_score_chart 5b3b6b8ec3a3684b8900d8fd" data-percent="78" data-track-color="#204529" data-bar-color="#21d07a">
                                                                    <div className="percent">
                                                                        <span className="icon icon-r78"></span>
                                                                    </div>
                                                                    <canvas height="34" width="34"></canvas></div>
                                                            </div>
                                                        </div>

                                                        <h2><a href="/movie/533535-deadpool-wolverine" title="Deadpool &amp; Wolverine">Deadpool &amp; Wolverine</a></h2>
                                                        <p>Jul 24, 2024</p>
                                                    </div>

                                                    <div className="hover 533535"></div>
                                                </div>

                                                <div className="card style_1">
                                                    <div className="image">
                                                        <div className="wrapper glyphicons_v2 picture grey no_image_holder">
                                                            <a className="image" href="/movie/718821-twisters" title="Twisters">
                                                                <img loading="lazy" className="poster w-full" src="https://media.themoviedb.org/t/p/w220_and_h330_face/pjnD08FlMAIXsfOLKQbvmO0f0MD.jpg" srcSet="https://media.themoviedb.org/t/p/w220_and_h330_face/pjnD08FlMAIXsfOLKQbvmO0f0MD.jpg 1x, https://media.themoviedb.org/t/p/w440_and_h660_face/pjnD08FlMAIXsfOLKQbvmO0f0MD.jpg 2x" alt="Twisters" />

                                                            </a>
                                                        </div>
                                                        <div className="options" data-id="718821" data-object-id="5ef451d4bccf1e0038383e47" data-media-type="movie" data-role="tooltip">
                                                            <a className="no_click" href="#" aria-label="View Item Options"><div className="glyphicons_v2 circle-more white"></div></a>
                                                        </div>
                                                    </div>

                                                    <div className="content">
                                                        <div className="consensus tight">
                                                            <div className="outer_ring">
                                                                <div className="user_score_chart 5ef451d4bccf1e0038383e47" data-percent="70" data-track-color="#204529" data-bar-color="#21d07a">
                                                                    <div className="percent">
                                                                        <span className="icon icon-r70"></span>
                                                                    </div>
                                                                    <canvas height="34" width="34"></canvas></div>
                                                            </div>
                                                        </div>

                                                        <h2><a href="/movie/718821-twisters" title="Twisters">Twisters</a></h2>
                                                        <p>Jul 10, 2024</p>
                                                    </div>

                                                    <div className="hover 718821"></div>
                                                </div>

                                                <div className="card style_1">
                                                    <div className="image">
                                                        <div className="wrapper glyphicons_v2 picture grey no_image_holder">
                                                            <a className="image" href="/movie/1029955-kinds-of-kindness" title="Kinds of Kindness">
                                                                <img loading="lazy" className="poster w-full" src="https://media.themoviedb.org/t/p/w220_and_h330_face/8mmpltkcG9areafsQHXaURedno3.jpg" srcSet="https://media.themoviedb.org/t/p/w220_and_h330_face/8mmpltkcG9areafsQHXaURedno3.jpg 1x, https://media.themoviedb.org/t/p/w440_and_h660_face/8mmpltkcG9areafsQHXaURedno3.jpg 2x" alt="Kinds of Kindness" />

                                                            </a>
                                                        </div>
                                                        <div className="options" data-id="1029955" data-object-id="6335dec4cca7de008448d224" data-media-type="movie" data-role="tooltip">
                                                            <a className="no_click" href="#" aria-label="View Item Options"><div className="glyphicons_v2 circle-more white"></div></a>
                                                        </div>
                                                    </div>

                                                    <div className="content">
                                                        <div className="consensus tight">
                                                            <div className="outer_ring">
                                                                <div className="user_score_chart 6335dec4cca7de008448d224" data-percent="67" data-track-color="#423d0f" data-bar-color="#d2d531">
                                                                    <div className="percent">
                                                                        <span className="icon icon-r67"></span>
                                                                    </div>
                                                                    <canvas height="34" width="34"></canvas></div>
                                                            </div>
                                                        </div>

                                                        <h2><a href="/movie/1029955-kinds-of-kindness" title="Kinds of Kindness">Kinds of Kindness</a></h2>
                                                        <p>Ags 30, 2024</p>
                                                    </div>

                                                    <div className="hover 1029955"></div>
                                                </div>

                                                <div className="card style_1">
                                                    <div className="image">
                                                        <div className="wrapper glyphicons_v2 picture grey no_image_holder">
                                                            <a className="image" href="/tv/230069-respira" title="Breathless">
                                                                <img loading="lazy" className="poster w-full" src="https://media.themoviedb.org/t/p/w220_and_h330_face/s6qEnmFxRqQQhjPAZPNHlwPc75y.jpg" srcSet="https://media.themoviedb.org/t/p/w220_and_h330_face/s6qEnmFxRqQQhjPAZPNHlwPc75y.jpg 1x, https://media.themoviedb.org/t/p/w440_and_h660_face/s6qEnmFxRqQQhjPAZPNHlwPc75y.jpg 2x" alt="Breathless" />

                                                            </a>
                                                        </div>
                                                        <div className="options" data-id="230069" data-object-id="64a58ca35a9915011dd398ec" data-media-type="tv" data-role="tooltip">
                                                            <a className="no_click" href="#" aria-label="View Item Options"><div className="glyphicons_v2 circle-more white"></div></a>
                                                        </div>
                                                    </div>

                                                    <div className="content">
                                                        <div className="consensus tight">
                                                            <div className="outer_ring">
                                                                <div className="user_score_chart 64a58ca35a9915011dd398ec" data-percent="88" data-track-color="#204529" data-bar-color="#21d07a">
                                                                    <div className="percent">
                                                                        <span className="icon icon-r88"></span>
                                                                    </div>
                                                                    <canvas height="34" width="34"></canvas></div>
                                                            </div>
                                                        </div>

                                                        <h2><a href="/tv/230069-respira" title="Breathless">Breathless</a></h2>
                                                        <p>Ags 30, 2024</p>
                                                    </div>

                                                    <div className="hover 230069"></div>
                                                </div>

                                                <div className="card style_1">
                                                    <div className="image">
                                                        <div className="wrapper glyphicons_v2 picture grey no_image_holder">
                                                            <a className="image" href="/movie/1114926-the-good-half" title="The Good Half">
                                                                <img loading="lazy" className="poster w-full" src="https://media.themoviedb.org/t/p/w220_and_h330_face/iLkefl9aLo29ALVBbViRVyLo3WF.jpg" srcSet="https://media.themoviedb.org/t/p/w220_and_h330_face/iLkefl9aLo29ALVBbViRVyLo3WF.jpg 1x, https://media.themoviedb.org/t/p/w440_and_h660_face/iLkefl9aLo29ALVBbViRVyLo3WF.jpg 2x" alt="The Good Half" />

                                                            </a>
                                                        </div>
                                                        <div className="options" data-id="1114926" data-object-id="643ebf1ad7a70a0314ab4dff" data-media-type="movie" data-role="tooltip">
                                                            <a className="no_click" href="#" aria-label="View Item Options"><div className="glyphicons_v2 circle-more white"></div></a>
                                                        </div>
                                                    </div>

                                                    <div className="content">
                                                        <div className="consensus tight">
                                                            <div className="outer_ring">
                                                                <div className="user_score_chart 643ebf1ad7a70a0314ab4dff" data-percent="47" data-track-color="#423d0f" data-bar-color="#d2d531">
                                                                    <div className="percent">
                                                                        <span className="icon icon-r47"></span>
                                                                    </div>
                                                                    <canvas height="34" width="34"></canvas></div>
                                                            </div>
                                                        </div>

                                                        <h2><a href="/movie/1114926-the-good-half" title="The Good Half">The Good Half</a></h2>
                                                        <p>Jul 23, 2024</p>
                                                    </div>

                                                    <div className="hover 1114926"></div>
                                                </div>

                                                <div className="card style_1">
                                                    <div className="image">
                                                        <div className="wrapper glyphicons_v2 picture grey no_image_holder">
                                                            <a className="image" href="/movie/1144911-skincare" title="Skincare">
                                                                <img loading="lazy" className="poster w-full" src="https://media.themoviedb.org/t/p/w220_and_h330_face/70r0BLCDTZahz2JbHZ30Dv2wio.jpg" srcSet="https://media.themoviedb.org/t/p/w220_and_h330_face/70r0BLCDTZahz2JbHZ30Dv2wio.jpg 1x, https://media.themoviedb.org/t/p/w440_and_h660_face/70r0BLCDTZahz2JbHZ30Dv2wio.jpg 2x" alt="Skincare" />

                                                            </a>
                                                        </div>
                                                        <div className="options" data-id="1144911" data-object-id="649a1ca00e5aba00ffc31b57" data-media-type="movie" data-role="tooltip">
                                                            <a className="no_click" href="#" aria-label="View Item Options"><div className="glyphicons_v2 circle-more white"></div></a>
                                                        </div>
                                                    </div>

                                                    <div className="content">
                                                        <div className="consensus tight">
                                                            <div className="outer_ring">
                                                                <div className="user_score_chart 649a1ca00e5aba00ffc31b57" data-percent="68" data-track-color="#423d0f" data-bar-color="#d2d531">
                                                                    <div className="percent">
                                                                        <span className="icon icon-r68"></span>
                                                                    </div>
                                                                    <canvas height="34" width="34"></canvas></div>
                                                            </div>
                                                        </div>

                                                        <h2><a href="/movie/1144911-skincare" title="Skincare">Skincare</a></h2>
                                                        <p>Ags 15, 2024</p>
                                                    </div>

                                                    <div className="hover 1144911"></div>
                                                </div>

                                                <div className="card style_1">
                                                    <div className="image">
                                                        <div className="wrapper glyphicons_v2 picture grey no_image_holder">
                                                            <a className="image" href="/tv/37854" title="One Piece">
                                                                <img loading="lazy" className="poster w-full" src="https://media.themoviedb.org/t/p/w220_and_h330_face/cMD9Ygz11zjJzAovURpO75Qg7rT.jpg" srcSet="https://media.themoviedb.org/t/p/w220_and_h330_face/cMD9Ygz11zjJzAovURpO75Qg7rT.jpg 1x, https://media.themoviedb.org/t/p/w440_and_h660_face/cMD9Ygz11zjJzAovURpO75Qg7rT.jpg 2x" alt="One Piece" />

                                                            </a>
                                                        </div>
                                                        <div className="options" data-id="37854" data-object-id="5258eb43760ee346618978a5" data-media-type="tv" data-role="tooltip">
                                                            <a className="no_click" href="#" aria-label="View Item Options"><div className="glyphicons_v2 circle-more white"></div></a>
                                                        </div>
                                                    </div>

                                                    <div className="content">
                                                        <div className="consensus tight">
                                                            <div className="outer_ring">
                                                                <div className="user_score_chart 5258eb43760ee346618978a5" data-percent="87" data-track-color="#204529" data-bar-color="#21d07a">
                                                                    <div className="percent">
                                                                        <span className="icon icon-r87"></span>
                                                                    </div>
                                                                    <canvas height="34" width="34"></canvas></div>
                                                            </div>
                                                        </div>

                                                        <h2><a href="/tv/37854" title="One Piece">One Piece</a></h2>
                                                        <p>Okt 20, 1999</p>
                                                    </div>

                                                    <div className="hover 37854"></div>
                                                </div>

                                                <div className="card style_1">
                                                    <div className="image">
                                                        <div className="wrapper glyphicons_v2 picture grey no_image_holder">
                                                            <a className="image" href="/movie/970347-the-killer" title="The Killer">
                                                                <img loading="lazy" className="poster w-full" src="https://media.themoviedb.org/t/p/w220_and_h330_face/6PCnxKZZIVRanWb710pNpYVkCSw.jpg" srcSet="https://media.themoviedb.org/t/p/w220_and_h330_face/6PCnxKZZIVRanWb710pNpYVkCSw.jpg 1x, https://media.themoviedb.org/t/p/w440_and_h660_face/6PCnxKZZIVRanWb710pNpYVkCSw.jpg 2x" alt="The Killer" />

                                                            </a>
                                                        </div>
                                                        <div className="options" data-id="970347" data-object-id="6270094f903c521884750455" data-media-type="movie" data-role="tooltip">
                                                            <a className="no_click" href="#" aria-label="View Item Options"><div className="glyphicons_v2 circle-more white"></div></a>
                                                        </div>
                                                    </div>

                                                    <div className="content">
                                                        <div className="consensus tight">
                                                            <div className="outer_ring">
                                                                <div className="user_score_chart 6270094f903c521884750455" data-percent="64" data-track-color="#423d0f" data-bar-color="#d2d531">
                                                                    <div className="percent">
                                                                        <span className="icon icon-r64"></span>
                                                                    </div>
                                                                    <canvas height="34" width="34"></canvas></div>
                                                            </div>
                                                        </div>

                                                        <h2><a href="/movie/970347-the-killer" title="The Killer">The Killer</a></h2>
                                                        <p>Ags 22, 2024</p>
                                                    </div>

                                                    <div className="hover 970347"></div>
                                                </div>

                                                <div className="card style_1">
                                                    <div className="image">
                                                        <div className="wrapper glyphicons_v2 picture grey no_image_holder">
                                                            <a className="image" href="/movie/4011-beetlejuice" title="Beetlejuice">
                                                                <img loading="lazy" className="poster w-full" src="https://media.themoviedb.org/t/p/w220_and_h330_face/nnl6OWkyPpuMm595hmAxNW3rZFn.jpg" srcSet="https://media.themoviedb.org/t/p/w220_and_h330_face/nnl6OWkyPpuMm595hmAxNW3rZFn.jpg 1x, https://media.themoviedb.org/t/p/w440_and_h660_face/nnl6OWkyPpuMm595hmAxNW3rZFn.jpg 2x" alt="Beetlejuice" />

                                                            </a>
                                                        </div>
                                                        <div className="options" data-id="4011" data-object-id="4bc89d43017a3c122d0289f2" data-media-type="movie" data-role="tooltip">
                                                            <a className="no_click" href="#" aria-label="View Item Options"><div className="glyphicons_v2 circle-more white"></div></a>
                                                        </div>
                                                    </div>

                                                    <div className="content">
                                                        <div className="consensus tight">
                                                            <div className="outer_ring">
                                                                <div className="user_score_chart 4bc89d43017a3c122d0289f2" data-percent="74" data-track-color="#204529" data-bar-color="#21d07a">
                                                                    <div className="percent">
                                                                        <span className="icon icon-r74"></span>
                                                                    </div>
                                                                    <canvas height="34" width="34"></canvas></div>
                                                            </div>
                                                        </div>

                                                        <h2><a href="/movie/4011-beetlejuice" title="Beetlejuice">Beetlejuice</a></h2>
                                                        <p>Mar 30, 1988</p>
                                                    </div>

                                                    <div className="hover 4011"></div>
                                                </div>

                                                <div className="card style_1">
                                                    <div className="image">
                                                        <div className="wrapper glyphicons_v2 picture grey no_image_holder">
                                                            <a className="image" href="/movie/348-alien" title="Alien">
                                                                <img loading="lazy" className="poster w-full" src="https://media.themoviedb.org/t/p/w220_and_h330_face/vfrQk5IPloGg1v9Rzbh2Eg3VGyM.jpg" srcSet="https://media.themoviedb.org/t/p/w220_and_h330_face/vfrQk5IPloGg1v9Rzbh2Eg3VGyM.jpg 1x, https://media.themoviedb.org/t/p/w440_and_h660_face/vfrQk5IPloGg1v9Rzbh2Eg3VGyM.jpg 2x" alt="Alien" />

                                                            </a>
                                                        </div>
                                                        <div className="options" data-id="348" data-object-id="4bc88dfe017a3c122d0065a0" data-media-type="movie" data-role="tooltip">
                                                            <a className="no_click" href="#" aria-label="View Item Options"><div className="glyphicons_v2 circle-more white"></div></a>
                                                        </div>
                                                    </div>

                                                    <div className="content">
                                                        <div className="consensus tight">
                                                            <div className="outer_ring">
                                                                <div className="user_score_chart 4bc88dfe017a3c122d0065a0" data-percent="82" data-track-color="#204529" data-bar-color="#21d07a">
                                                                    <div className="percent">
                                                                        <span className="icon icon-r82"></span>
                                                                    </div>
                                                                    <canvas height="34" width="34"></canvas></div>
                                                            </div>
                                                        </div>

                                                        <h2><a href="/movie/348-alien" title="Alien">Alien</a></h2>
                                                        <p>Okt 31, 1979</p>
                                                    </div>

                                                    <div className="hover 348"></div>
                                                </div>

                                                <div className="card style_1 spacer"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section className="inner_content bg_image no_pad video" style={{ backgroundImage: 'url(https://media.themoviedb.org/t/p/w1920_and_h427_multi_faces/wCsDvlcQLwz7fzuZkfe2eS5Pgkh.jpg)' }}>
                            <div className="column_wrapper">
                                <div id="trailer_scroller" className="media discover scroller_wrap should_fade is_hidden">
                                    <div className="content_wrapper wrap no_bottom_pad">
                                        <div className="column">
                                            <div className="column_header">
                                                <h2>Latest Trailers</h2>

                                                <div className="selector_wrap">
                                                    <div className="selector">
                                                        <div className="anchor selected">
                                                            <h3 className="leading-5"><a href="#" className="no_click" data-panel="trailer_scroller" data-group="popular">Popular <span className="glyphicons_v2 chevron-down"></span></a></h3>
                                                            <div className="background"></div>
                                                        </div>

                                                        <div className="anchor ">
                                                            <h3 className="leading-5"><a href="#" className="no_click" data-panel="trailer_scroller" data-group="streaming">Streaming <span className="glyphicons_v2 chevron-down"></span></a></h3>
                                                        </div>

                                                        <div className="anchor ">
                                                            <h3 className="leading-5"><a href="#" className="no_click" data-panel="trailer_scroller" data-group="on-tv">On TV <span className="glyphicons_v2 chevron-down"></span></a></h3>
                                                        </div>

                                                        <div className="anchor ">
                                                            <h3 className="leading-5"><a href="#" className="no_click" data-panel="trailer_scroller" data-group="for-rent">For Rent <span className="glyphicons_v2 chevron-down"></span></a></h3>
                                                        </div>

                                                        <div className="anchor">
                                                            <h3 className="leading-5"><a href="#" className="no_click" data-panel="trailer_scroller" data-group="in-theatres">In Theaters <span className="glyphicons_v2 chevron-down"></span></a></h3>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="column_content flex scroller loaded">
                                                <div className="card video style_2 true" data-bg-image="https://media.themoviedb.org/t/p/w1920_and_h427_multi_faces/yNU8UF3DOmv3G9gVNAj34beclTG.jpg">
                                                    <div className="image">
                                                        <div className="wrapper glyphicons_v2 picture grey no_image_holder">
                                                            <a className="image play_trailer" data-id="A4JwDj8rPOM" data-title="Witness the origin of your favorite robots!" href="/movie/698687-transformers-one" title="Transformers One">
                                                                <img loading="lazy" className="backdrop w-full" src="https://media.themoviedb.org/t/p/w355_and_h200_multi_faces/yNU8UF3DOmv3G9gVNAj34beclTG.jpg" srcSet="https://media.themoviedb.org/t/p/w355_and_h200_multi_faces/yNU8UF3DOmv3G9gVNAj34beclTG.jpg 1x, https://media.themoviedb.org/t/p/w710_and_h400_multi_faces/yNU8UF3DOmv3G9gVNAj34beclTG.jpg 2x" alt="Transformers One" />

                                                                <div className="play">
                                                                    <span className="glyphicons_v2 play invert svg"></span>
                                                                </div>
                                                            </a>
                                                        </div>

                                                        <div className="options" data-id="698687" data-object-id="5eaa2f9a2d1e40001f853626" data-media-type="movie" data-role="tooltip">
                                                            <a className="no_click" href="#" aria-label="View Item Options"><div className="glyphicons_v2 circle-more white"></div></a>
                                                        </div>
                                                    </div>

                                                    <div className="content">
                                                        <h2><a href="/movie/698687-transformers-one" title="Transformers One">Transformers One</a></h2>
                                                        <h3>Witness the origin of your favorite robots!</h3>
                                                    </div>
                                                </div>

                                                <div className="card video style_2 true" data-bg-image="https://media.themoviedb.org/t/p/w1920_and_h427_multi_faces/b18Vz2Y1lDyxoHK8EzY3InZQ04p.jpg">
                                                    <div className="image">
                                                        <div className="wrapper glyphicons_v2 picture grey no_image_holder">
                                                            <a className="image play_trailer" data-id="YwK4f1grMlc" data-title="Lifetime" href="/movie/1002626-the-supremes-at-earl-s-all-you-can-eat" title="The Supremes at Earl's All-You-Can-Eat">
                                                                <img loading="lazy" className="backdrop w-full" src="https://media.themoviedb.org/t/p/w355_and_h200_multi_faces/b18Vz2Y1lDyxoHK8EzY3InZQ04p.jpg" srcSet="https://media.themoviedb.org/t/p/w355_and_h200_multi_faces/b18Vz2Y1lDyxoHK8EzY3InZQ04p.jpg 1x, https://media.themoviedb.org/t/p/w710_and_h400_multi_faces/b18Vz2Y1lDyxoHK8EzY3InZQ04p.jpg 2x" alt="The Supremes at Earl's All-You-Can-Eat" />

                                                                <div className="play">
                                                                    <span className="glyphicons_v2 play invert svg"></span>
                                                                </div>
                                                            </a>
                                                        </div>

                                                        <div className="options" data-id="1002626" data-object-id="62d99b6fbbe1dd006aabdf91" data-media-type="movie" data-role="tooltip">
                                                            <a className="no_click" href="#" aria-label="View Item Options"><div className="glyphicons_v2 circle-more white"></div></a>
                                                        </div>
                                                    </div>

                                                    <div className="content">
                                                        <h2><a href="/movie/1002626-the-supremes-at-earl-s-all-you-can-eat" title="The Supremes at Earl's All-You-Can-Eat">The Supremes at Earl's All-You-Can-Eat</a></h2>
                                                        <h3>Lifetime</h3>
                                                    </div>
                                                </div>

                                                <div className="card video style_2 true" data-bg-image="https://media.themoviedb.org/t/p/w1920_and_h427_multi_faces/xx0VTrtvoRptaY3unl61Ecft8MI.jpg">
                                                    <div className="image">
                                                        <div className="wrapper glyphicons_v2 picture grey no_image_holder">
                                                            <a className="image play_trailer" data-id="XyYx89UPrbs" data-title="Joker: Folie À Deux | Official Teaser Trailer" href="/movie/889737-joker-folie-a-deux" title="Joker: Folie à Deux">
                                                                <img loading="lazy" className="backdrop w-full" src="https://media.themoviedb.org/t/p/w355_and_h200_multi_faces/xx0VTrtvoRptaY3unl61Ecft8MI.jpg" srcSet="https://media.themoviedb.org/t/p/w355_and_h200_multi_faces/xx0VTrtvoRptaY3unl61Ecft8MI.jpg 1x, https://media.themoviedb.org/t/p/w710_and_h400_multi_faces/xx0VTrtvoRptaY3unl61Ecft8MI.jpg 2x" alt="Joker: Folie à Deux" />

                                                                <div className="play">
                                                                    <span className="glyphicons_v2 play invert svg"></span>
                                                                </div>
                                                            </a>
                                                        </div>

                                                        <div className="options" data-id="889737" data-object-id="6176f7fa0d5d850091655a81" data-media-type="movie" data-role="tooltip">
                                                            <a className="no_click" href="#" aria-label="View Item Options"><div className="glyphicons_v2 circle-more white"></div></a>
                                                        </div>
                                                    </div>

                                                    <div className="content">
                                                        <h2><a href="/movie/889737-joker-folie-a-deux" title="Joker: Folie à Deux">Joker: Folie à Deux</a></h2>
                                                        <h3>Joker: Folie À Deux | Official Teaser Trailer</h3>
                                                    </div>
                                                </div>

                                                <div className="card video style_2 true" data-bg-image="https://media.themoviedb.org/t/p/w1920_and_h427_multi_faces/wCsDvlcQLwz7fzuZkfe2eS5Pgkh.jpg">
                                                    <div className="image">
                                                        <div className="wrapper glyphicons_v2 picture grey no_image_holder">
                                                            <a className="image play_trailer" data-id="77UxuAADRR0" data-title="Ang Bagong Laban ng mga Sagrado" href="/tv/256429-pamilya-sagrado" title="Pamilya Sagrado">
                                                                <img loading="lazy" className="backdrop w-full" src="https://media.themoviedb.org/t/p/w355_and_h200_multi_faces/wCsDvlcQLwz7fzuZkfe2eS5Pgkh.jpg" srcSet="https://media.themoviedb.org/t/p/w355_and_h200_multi_faces/wCsDvlcQLwz7fzuZkfe2eS5Pgkh.jpg 1x, https://media.themoviedb.org/t/p/w710_and_h400_multi_faces/wCsDvlcQLwz7fzuZkfe2eS5Pgkh.jpg 2x" alt="Pamilya Sagrado" />

                                                                <div className="play">
                                                                    <span className="glyphicons_v2 play invert svg"></span>
                                                                </div>
                                                            </a>
                                                        </div>

                                                        <div className="options" data-id="256429" data-object-id="666446b5db9016e27978c6e4" data-media-type="tv" data-role="tooltip">
                                                            <a className="no_click" href="#" aria-label="View Item Options"><div className="glyphicons_v2 circle-more white"></div></a>
                                                        </div>
                                                    </div>

                                                    <div className="content">
                                                        <h2><a href="/tv/256429-pamilya-sagrado" title="Pamilya Sagrado">Pamilya Sagrado</a></h2>
                                                        <h3>Ang Bagong Laban ng mga Sagrado</h3>
                                                    </div>
                                                </div>

                                                <div className="card video style_2 true" data-bg-image="https://media.themoviedb.org/t/p/w1920_and_h427_multi_faces/9SSEUrSqhljBMzRe4aBTh17rUaC.jpg">
                                                    <div className="image">
                                                        <div className="wrapper glyphicons_v2 picture grey no_image_holder">
                                                            <a className="image play_trailer" data-id="u3Pc92BFbOg" data-title="Acid" href="/movie/945961-alien-romulus" title="Alien: Romulus">
                                                                <img loading="lazy" className="backdrop w-full" src="https://media.themoviedb.org/t/p/w355_and_h200_multi_faces/9SSEUrSqhljBMzRe4aBTh17rUaC.jpg" srcSet="https://media.themoviedb.org/t/p/w355_and_h200_multi_faces/9SSEUrSqhljBMzRe4aBTh17rUaC.jpg 1x, https://media.themoviedb.org/t/p/w710_and_h400_multi_faces/9SSEUrSqhljBMzRe4aBTh17rUaC.jpg 2x" alt="Alien: Romulus" />

                                                                <div className="play">
                                                                    <span className="glyphicons_v2 play invert svg"></span>
                                                                </div>
                                                            </a>
                                                        </div>

                                                        <div className="options" data-id="945961" data-object-id="6222913cc2823a00421925c8" data-media-type="movie" data-role="tooltip">
                                                            <a className="no_click" href="#" aria-label="View Item Options"><div className="glyphicons_v2 circle-more white"></div></a>
                                                        </div>
                                                    </div>

                                                    <div className="content">
                                                        <h2><a href="/movie/945961-alien-romulus" title="Alien: Romulus">Alien: Romulus</a></h2>
                                                        <h3>Acid</h3>
                                                    </div>
                                                </div>

                                                <div className="card video style_2 true" data-bg-image="https://media.themoviedb.org/t/p/w1920_and_h427_multi_faces/2Erj4Oav9EHAtqLI354VM7ULDqu.jpg">
                                                    <div className="image">
                                                        <div className="wrapper glyphicons_v2 picture grey no_image_holder">
                                                            <a className="image play_trailer" data-id="6PXuYlrORpc" data-title="Generations - Teaser" href="/tv/73586-yellowstone" title="Yellowstone">
                                                                <img loading="lazy" className="backdrop w-full" src="https://media.themoviedb.org/t/p/w355_and_h200_multi_faces/2Erj4Oav9EHAtqLI354VM7ULDqu.jpg" srcSet="https://media.themoviedb.org/t/p/w355_and_h200_multi_faces/2Erj4Oav9EHAtqLI354VM7ULDqu.jpg 1x, https://media.themoviedb.org/t/p/w710_and_h400_multi_faces/2Erj4Oav9EHAtqLI354VM7ULDqu.jpg 2x" alt="Yellowstone" />

                                                                <div className="play">
                                                                    <span className="glyphicons_v2 play invert svg"></span>
                                                                </div>
                                                            </a>
                                                        </div>

                                                        <div className="options" data-id="73586" data-object-id="59a5dfc3c3a368403b0136f7" data-media-type="tv" data-role="tooltip">
                                                            <a className="no_click" href="#" aria-label="View Item Options"><div className="glyphicons_v2 circle-more white"></div></a>
                                                        </div>
                                                    </div>

                                                    <div className="content">
                                                        <h2><a href="/tv/73586-yellowstone" title="Yellowstone">Yellowstone</a></h2>
                                                        <h3>Generations - Teaser</h3>
                                                    </div>
                                                </div>

                                                <div className="card video style_2 true" data-bg-image="https://media.themoviedb.org/t/p/w1920_and_h427_multi_faces/jGi4DFFsrJ1r7FfN5FvUOTUziDt.jpg">
                                                    <div className="image">
                                                        <div className="wrapper glyphicons_v2 picture grey no_image_holder">
                                                            <a className="image play_trailer" data-id="etSijxQO2Bg" data-title="Jurassic World Rebirth" href="/movie/1234821-jurassic-world-rebirth" title="Jurassic World Rebirth">
                                                                <img loading="lazy" className="backdrop w-full" src="https://media.themoviedb.org/t/p/w355_and_h200_multi_faces/jGi4DFFsrJ1r7FfN5FvUOTUziDt.jpg" srcSet="https://media.themoviedb.org/t/p/w355_and_h200_multi_faces/jGi4DFFsrJ1r7FfN5FvUOTUziDt.jpg 1x, https://media.themoviedb.org/t/p/w710_and_h400_multi_faces/jGi4DFFsrJ1r7FfN5FvUOTUziDt.jpg 2x" alt="Jurassic World Rebirth" />

                                                                <div className="play">
                                                                    <span className="glyphicons_v2 play invert svg"></span>
                                                                </div>
                                                            </a>
                                                        </div>

                                                        <div className="options" data-id="1234821" data-object-id="65aec11ad100b600ada63dbe" data-media-type="movie" data-role="tooltip">
                                                            <a className="no_click" href="#" aria-label="View Item Options"><div className="glyphicons_v2 circle-more white"></div></a>
                                                        </div>
                                                    </div>

                                                    <div className="content">
                                                        <h2><a href="/movie/1234821-jurassic-world-rebirth" title="Jurassic World Rebirth">Jurassic World Rebirth</a></h2>
                                                        <h3>Jurassic World Rebirth</h3>
                                                    </div>
                                                </div>

                                                <div className="card video style_2 true" data-bg-image="https://media.themoviedb.org/t/p/w1920_and_h427_multi_faces/wpjPWl3t6H4M9gmSxNz91tichkU.jpg">
                                                    <div className="image">
                                                        <div className="wrapper glyphicons_v2 picture grey no_image_holder">
                                                            <a className="image play_trailer" data-id="58VULUivjcg" data-title="The Voice UK is back! | ITV" href="/tv/39614-the-voice-uk" title="The Voice UK">
                                                                <img loading="lazy" className="backdrop w-full" src="https://media.themoviedb.org/t/p/w355_and_h200_multi_faces/wpjPWl3t6H4M9gmSxNz91tichkU.jpg" srcSet="https://media.themoviedb.org/t/p/w355_and_h200_multi_faces/wpjPWl3t6H4M9gmSxNz91tichkU.jpg 1x, https://media.themoviedb.org/t/p/w710_and_h400_multi_faces/wpjPWl3t6H4M9gmSxNz91tichkU.jpg 2x" alt="The Voice UK" />

                                                                <div className="play">
                                                                    <span className="glyphicons_v2 play invert svg"></span>
                                                                </div>
                                                            </a>
                                                        </div>

                                                        <div className="options" data-id="39614" data-object-id="52595a82760ee34661911803" data-media-type="tv" data-role="tooltip">
                                                            <a className="no_click" href="#" aria-label="View Item Options"><div className="glyphicons_v2 circle-more white"></div></a>
                                                        </div>
                                                    </div>

                                                    <div className="content">
                                                        <h2><a href="/tv/39614-the-voice-uk" title="The Voice UK">The Voice UK</a></h2>
                                                        <h3>The Voice UK is back! | ITV</h3>
                                                    </div>
                                                </div>

                                                <div className="card video style_2 true" data-bg-image="https://media.themoviedb.org/t/p/w1920_and_h427_multi_faces/mvDMt3JZ5zlsrXduGzj9jBEfVBT.jpg">
                                                    <div className="image">
                                                        <div className="wrapper glyphicons_v2 picture grey no_image_holder">
                                                            <a className="image play_trailer" data-id="0EDDtgWnSeY" data-title="Uncut Theatrical Trailer" href="/movie/1034541-terrifier-3" title="Terrifier 3">
                                                                <img loading="lazy" className="backdrop w-full" src="https://media.themoviedb.org/t/p/w355_and_h200_multi_faces/mvDMt3JZ5zlsrXduGzj9jBEfVBT.jpg" srcSet="https://media.themoviedb.org/t/p/w355_and_h200_multi_faces/mvDMt3JZ5zlsrXduGzj9jBEfVBT.jpg 1x, https://media.themoviedb.org/t/p/w710_and_h400_multi_faces/mvDMt3JZ5zlsrXduGzj9jBEfVBT.jpg 2x" alt="Terrifier 3" />

                                                                <div className="play">
                                                                    <span className="glyphicons_v2 play invert svg"></span>
                                                                </div>
                                                            </a>
                                                        </div>

                                                        <div className="options" data-id="1034541" data-object-id="6346538dd55c3d007ded3e85" data-media-type="movie" data-role="tooltip">
                                                            <a className="no_click" href="#" aria-label="View Item Options"><div className="glyphicons_v2 circle-more white"></div></a>
                                                        </div>
                                                    </div>

                                                    <div className="content">
                                                        <h2><a href="/movie/1034541-terrifier-3" title="Terrifier 3">Terrifier 3</a></h2>
                                                        <h3>Uncut Theatrical Trailer</h3>
                                                    </div>
                                                </div>

                                                <div className="card video style_2 true" data-bg-image="https://media.themoviedb.org/t/p/w1920_and_h427_multi_faces/8c5DY9CWuwiIHIcit5qMHDpNFpb.jpg">
                                                    <div className="image">
                                                        <div className="wrapper glyphicons_v2 picture grey no_image_holder">
                                                            <a className="image play_trailer" data-id="knXbOhZE2gQ" data-title="It may not be a Wednesday, but we thought you might like this." href="/movie/917496-beetlejuice-beetlejuice" title="Beetlejuice Beetlejuice">
                                                                <img loading="lazy" className="backdrop w-full" src="https://media.themoviedb.org/t/p/w355_and_h200_multi_faces/8c5DY9CWuwiIHIcit5qMHDpNFpb.jpg" srcSet="https://media.themoviedb.org/t/p/w355_and_h200_multi_faces/8c5DY9CWuwiIHIcit5qMHDpNFpb.jpg 1x, https://media.themoviedb.org/t/p/w710_and_h400_multi_faces/8c5DY9CWuwiIHIcit5qMHDpNFpb.jpg 2x" alt="Beetlejuice Beetlejuice" />

                                                                <div className="play">
                                                                    <span className="glyphicons_v2 play invert svg"></span>
                                                                </div>
                                                            </a>
                                                        </div>

                                                        <div className="options" data-id="917496" data-object-id="61be274afa404600605eb4a7" data-media-type="movie" data-role="tooltip">
                                                            <a className="no_click" href="#" aria-label="View Item Options"><div className="glyphicons_v2 circle-more white"></div></a>
                                                        </div>
                                                    </div>

                                                    <div className="content">
                                                        <h2><a href="/movie/917496-beetlejuice-beetlejuice" title="Beetlejuice Beetlejuice">Beetlejuice Beetlejuice</a></h2>
                                                        <h3>It may not be a Wednesday, but we thought you might like this.</h3>
                                                    </div>
                                                </div>

                                                <div className="card video style_2 true" data-bg-image="https://media.themoviedb.org/t/p/w1920_and_h427_multi_faces/waLxHxN9n1xL8rSmZOoOITbfiC5.jpg">
                                                    <div className="image">
                                                        <div className="wrapper glyphicons_v2 picture grey no_image_holder">
                                                            <a className="image play_trailer" data-id="qSu6i2iFMO0" data-title="Official Trailer" href="/movie/939243-sonic-the-hedgehog-3" title="Sonic the Hedgehog 3">
                                                                <img loading="lazy" className="backdrop w-full" src="https://media.themoviedb.org/t/p/w355_and_h200_multi_faces/waLxHxN9n1xL8rSmZOoOITbfiC5.jpg" srcSet="https://media.themoviedb.org/t/p/w355_and_h200_multi_faces/waLxHxN9n1xL8rSmZOoOITbfiC5.jpg 1x, https://media.themoviedb.org/t/p/w710_and_h400_multi_faces/waLxHxN9n1xL8rSmZOoOITbfiC5.jpg 2x" alt="Sonic the Hedgehog 3" />

                                                                <div className="play">
                                                                    <span className="glyphicons_v2 play invert svg"></span>
                                                                </div>
                                                            </a>
                                                        </div>

                                                        <div className="options" data-id="939243" data-object-id="620c3fd1b458b8006d475b10" data-media-type="movie" data-role="tooltip">
                                                            <a className="no_click" href="#" aria-label="View Item Options"><div className="glyphicons_v2 circle-more white"></div></a>
                                                        </div>
                                                    </div>

                                                    <div className="content">
                                                        <h2><a href="/movie/939243-sonic-the-hedgehog-3" title="Sonic the Hedgehog 3">Sonic the Hedgehog 3</a></h2>
                                                        <h3>Official Trailer</h3>
                                                    </div>
                                                </div>

                                                <div className="card video style_2 true" data-bg-image="https://media.themoviedb.org/t/p/w1920_and_h427_multi_faces/ieqNiVyc68b9tzaP6Q1xCz8bp4t.jpg">
                                                    <div className="image">
                                                        <div className="wrapper glyphicons_v2 picture grey no_image_holder">
                                                            <a className="image play_trailer" data-id="ck944Ak3TL0" data-title="Teaser" href="/movie/936946-harvest" title="Harvest">
                                                                <img loading="lazy" className="backdrop w-full" src="https://media.themoviedb.org/t/p/w355_and_h200_multi_faces/ieqNiVyc68b9tzaP6Q1xCz8bp4t.jpg" srcSet="https://media.themoviedb.org/t/p/w355_and_h200_multi_faces/ieqNiVyc68b9tzaP6Q1xCz8bp4t.jpg 1x, https://media.themoviedb.org/t/p/w710_and_h400_multi_faces/ieqNiVyc68b9tzaP6Q1xCz8bp4t.jpg 2x" alt="Harvest" />

                                                                <div className="play">
                                                                    <span className="glyphicons_v2 play invert svg"></span>
                                                                </div>
                                                            </a>
                                                        </div>

                                                        <div className="options" data-id="936946" data-object-id="62048dafe2bca8006ae1f8f8" data-media-type="movie" data-role="tooltip">
                                                            <a className="no_click" href="#" aria-label="View Item Options"><div className="glyphicons_v2 circle-more white"></div></a>
                                                        </div>
                                                    </div>

                                                    <div className="content">
                                                        <h2><a href="/movie/936946-harvest" title="Harvest">Harvest</a></h2>
                                                        <h3>Teaser</h3>
                                                    </div>
                                                </div>

                                                <div className="card video style_2 true" data-bg-image="https://media.themoviedb.org/t/p/w1920_and_h427_multi_faces/g3Xnh179fPVI0LiZeNoF2WW9Bib.jpg">
                                                    <div className="image">
                                                        <div className="wrapper glyphicons_v2 picture grey no_image_holder">
                                                            <a className="image play_trailer" data-id="-g9oReOLgfs" data-title="NYFF62 Teaser [Subtitled]" href="/movie/974950-emilia-perez" title="Emilia Pérez">
                                                                <img loading="lazy" className="backdrop w-full" src="https://media.themoviedb.org/t/p/w355_and_h200_multi_faces/g3Xnh179fPVI0LiZeNoF2WW9Bib.jpg" srcSet="https://media.themoviedb.org/t/p/w355_and_h200_multi_faces/g3Xnh179fPVI0LiZeNoF2WW9Bib.jpg 1x, https://media.themoviedb.org/t/p/w710_and_h400_multi_faces/g3Xnh179fPVI0LiZeNoF2WW9Bib.jpg 2x" alt="Emilia Pérez" />

                                                                <div className="play">
                                                                    <span className="glyphicons_v2 play invert svg"></span>
                                                                </div>
                                                            </a>
                                                        </div>

                                                        <div className="options" data-id="974950" data-object-id="627d37a16d1bb200504e1e38" data-media-type="movie" data-role="tooltip">
                                                            <a className="no_click" href="#" aria-label="View Item Options"><div className="glyphicons_v2 circle-more white"></div></a>
                                                        </div>
                                                    </div>

                                                    <div className="content">
                                                        <h2><a href="/movie/974950-emilia-perez" title="Emilia Pérez">Emilia Pérez</a></h2>
                                                        <h3>NYFF62 Teaser [Subtitled]</h3>
                                                    </div>
                                                </div>

                                                <div className="card video style_2 true" data-bg-image="https://media.themoviedb.org/t/p/w1920_and_h427_multi_faces/xkKIruOg4NoADdPjJJrvfiJHRdZ.jpg">
                                                    <div className="image">
                                                        <div className="wrapper glyphicons_v2 picture grey no_image_holder">
                                                            <a className="image play_trailer" data-id="hJ1ditMDfIE" data-title="Emily in Paris: Season 4 Part 2 | Official Trailer | Netflix" href="/tv/82596-emily-in-paris" title="Emily in Paris">
                                                                <img loading="lazy" className="backdrop w-full" src="https://media.themoviedb.org/t/p/w355_and_h200_multi_faces/xkKIruOg4NoADdPjJJrvfiJHRdZ.jpg" srcSet="https://media.themoviedb.org/t/p/w355_and_h200_multi_faces/xkKIruOg4NoADdPjJJrvfiJHRdZ.jpg 1x, https://media.themoviedb.org/t/p/w710_and_h400_multi_faces/xkKIruOg4NoADdPjJJrvfiJHRdZ.jpg 2x" alt="Emily in Paris" />

                                                                <div className="play">
                                                                    <span className="glyphicons_v2 play invert svg"></span>
                                                                </div>
                                                            </a>
                                                        </div>

                                                        <div className="options" data-id="82596" data-object-id="5bab15b7c3a3683ab5019d5a" data-media-type="tv" data-role="tooltip">
                                                            <a className="no_click" href="#" aria-label="View Item Options"><div className="glyphicons_v2 circle-more white"></div></a>
                                                        </div>
                                                    </div>

                                                    <div className="content">
                                                        <h2><a href="/tv/82596-emily-in-paris" title="Emily in Paris">Emily in Paris</a></h2>
                                                        <h3>Emily in Paris: Season 4 Part 2 | Official Trailer | Netflix</h3>
                                                    </div>
                                                </div>

                                                <div className="card video style_2 true" data-bg-image="https://media.themoviedb.org/t/p/w1920_and_h427_multi_faces/woH18JkZMYhMSWqtHkPA4F6Gd1z.jpg">
                                                    <div className="image">
                                                        <div className="wrapper glyphicons_v2 picture grey no_image_holder">
                                                            <a className="image play_trailer" data-id="MzWP--eLIKY" data-title="Trailer Resmi NSFW" href="/tv/239287-terminator-anime" title="Terminator Zero">
                                                                <img loading="lazy" className="backdrop w-full" src="https://media.themoviedb.org/t/p/w355_and_h200_multi_faces/woH18JkZMYhMSWqtHkPA4F6Gd1z.jpg" srcSet="https://media.themoviedb.org/t/p/w355_and_h200_multi_faces/woH18JkZMYhMSWqtHkPA4F6Gd1z.jpg 1x, https://media.themoviedb.org/t/p/w710_and_h400_multi_faces/woH18JkZMYhMSWqtHkPA4F6Gd1z.jpg 2x" alt="Terminator Zero" />

                                                                <div className="play">
                                                                    <span className="glyphicons_v2 play invert svg"></span>
                                                                </div>
                                                            </a>
                                                        </div>

                                                        <div className="options" data-id="239287" data-object-id="654ff2935c564e00c6efe8e7" data-media-type="tv" data-role="tooltip">
                                                            <a className="no_click" href="#" aria-label="View Item Options"><div className="glyphicons_v2 circle-more white"></div></a>
                                                        </div>
                                                    </div>

                                                    <div className="content">
                                                        <h2><a href="/tv/239287-terminator-anime" title="Terminator Zero">Terminator Zero</a></h2>
                                                        <h3>Trailer Resmi NSFW</h3>
                                                    </div>
                                                </div>

                                                <div className="card video style_2 true" data-bg-image="https://media.themoviedb.org/t/p/w1920_and_h427_multi_faces/v9acaWVVFdZT5yAU7J2QjwfhXyD.jpg">
                                                    <div className="image">
                                                        <div className="wrapper glyphicons_v2 picture grey no_image_holder">
                                                            <a className="image play_trailer" data-id="dq36zIPc9GY" data-title="Humor" href="/movie/1184918-the-wild-robot" title="The Wild Robot">
                                                                <img loading="lazy" className="backdrop w-full" src="https://media.themoviedb.org/t/p/w355_and_h200_multi_faces/v9acaWVVFdZT5yAU7J2QjwfhXyD.jpg" srcSet="https://media.themoviedb.org/t/p/w355_and_h200_multi_faces/v9acaWVVFdZT5yAU7J2QjwfhXyD.jpg 1x, https://media.themoviedb.org/t/p/w710_and_h400_multi_faces/v9acaWVVFdZT5yAU7J2QjwfhXyD.jpg 2x" alt="The Wild Robot" />

                                                                <div className="play">
                                                                    <span className="glyphicons_v2 play invert svg"></span>
                                                                </div>
                                                            </a>
                                                        </div>

                                                        <div className="options" data-id="1184918" data-object-id="6515fcb9c50ad200ad7f4027" data-media-type="movie" data-role="tooltip">
                                                            <a className="no_click" href="#" aria-label="View Item Options"><div className="glyphicons_v2 circle-more white"></div></a>
                                                        </div>
                                                    </div>

                                                    <div className="content">
                                                        <h2><a href="/movie/1184918-the-wild-robot" title="The Wild Robot">The Wild Robot</a></h2>
                                                        <h3>Humor</h3>
                                                    </div>
                                                </div>

                                                <div className="card video style_2 true" data-bg-image="https://media.themoviedb.org/t/p/w1920_and_h427_multi_faces/nCnxbPs2mL5V336Uj6D8SjKV35v.jpg">
                                                    <div className="image">
                                                        <div className="wrapper glyphicons_v2 picture grey no_image_holder">
                                                            <a className="image play_trailer" data-id="gCUg6Td5fgQ" data-title="Official Trailer" href="/movie/839033-the-lord-of-the-rings-the-war-of-the-rohirrim" title="The Lord of the Rings: The War of the Rohirrim">
                                                                <img loading="lazy" className="backdrop w-full" src="https://media.themoviedb.org/t/p/w355_and_h200_multi_faces/nCnxbPs2mL5V336Uj6D8SjKV35v.jpg" srcSet="https://media.themoviedb.org/t/p/w355_and_h200_multi_faces/nCnxbPs2mL5V336Uj6D8SjKV35v.jpg 1x, https://media.themoviedb.org/t/p/w710_and_h400_multi_faces/nCnxbPs2mL5V336Uj6D8SjKV35v.jpg 2x" alt="The Lord of the Rings: The War of the Rohirrim" />

                                                                <div className="play">
                                                                    <span className="glyphicons_v2 play invert svg"></span>
                                                                </div>
                                                            </a>
                                                        </div>

                                                        <div className="options" data-id="839033" data-object-id="60c25945d861af006d7b8fd7" data-media-type="movie" data-role="tooltip">
                                                            <a className="no_click" href="#" aria-label="View Item Options"><div className="glyphicons_v2 circle-more white"></div></a>
                                                        </div>
                                                    </div>

                                                    <div className="content">
                                                        <h2><a href="/movie/839033-the-lord-of-the-rings-the-war-of-the-rohirrim" title="The Lord of the Rings: The War of the Rohirrim">The Lord of the Rings: The War of the Rohirrim</a></h2>
                                                        <h3>Official Trailer</h3>
                                                    </div>
                                                </div>

                                                <div className="card video style_2 true" data-bg-image="https://media.themoviedb.org/t/p/w1920_and_h427_multi_faces/1LSMstNHwJnJD7tpnb8gZcgGNQR.jpg">
                                                    <div className="image">
                                                        <div className="wrapper glyphicons_v2 picture grey no_image_holder">
                                                            <a className="image play_trailer" data-id="MSH43IbXRdc" data-title="OFFICIAL TRAILER FILM LEMBAYUNG | TAYANG MULAI 19 SEPTEMBER 2024 DI BIOSKOP!" href="/movie/1164355-lembayung" title="Lembayung">
                                                                <img loading="lazy" className="backdrop w-full" src="https://media.themoviedb.org/t/p/w355_and_h200_multi_faces/1LSMstNHwJnJD7tpnb8gZcgGNQR.jpg" srcSet="https://media.themoviedb.org/t/p/w355_and_h200_multi_faces/1LSMstNHwJnJD7tpnb8gZcgGNQR.jpg 1x, https://media.themoviedb.org/t/p/w710_and_h400_multi_faces/1LSMstNHwJnJD7tpnb8gZcgGNQR.jpg 2x" alt="Lembayung" />

                                                                <div className="play">
                                                                    <span className="glyphicons_v2 play invert svg"></span>
                                                                </div>
                                                            </a>
                                                        </div>

                                                        <div className="options" data-id="1164355" data-object-id="64d868cb069f0e00e46cd3a6" data-media-type="movie" data-role="tooltip">
                                                            <a className="no_click" href="#" aria-label="View Item Options"><div className="glyphicons_v2 circle-more white"></div></a>
                                                        </div>
                                                    </div>

                                                    <div className="content">
                                                        <h2><a href="/movie/1164355-lembayung" title="Lembayung">Lembayung</a></h2>
                                                        <h3>OFFICIAL TRAILER FILM LEMBAYUNG | TAYANG MULAI 19 SEPTEMBER 2024 DI BIOSKOP!</h3>
                                                    </div>
                                                </div>

                                                <div className="card video style_2 true" data-bg-image="https://media.themoviedb.org/t/p/w1920_and_h427_multi_faces/kONwFsTpchQj83Kh137rmtaD6WE.jpg">
                                                    <div className="image">
                                                        <div className="wrapper glyphicons_v2 picture grey no_image_holder">
                                                            <a className="image play_trailer" data-id="mPV_yivJ5po" data-title="Get Paid" href="/movie/413846-1992" title="1992">
                                                                <img loading="lazy" className="backdrop w-full" src="https://media.themoviedb.org/t/p/w355_and_h200_multi_faces/kONwFsTpchQj83Kh137rmtaD6WE.jpg" srcSet="https://media.themoviedb.org/t/p/w355_and_h200_multi_faces/kONwFsTpchQj83Kh137rmtaD6WE.jpg 1x, https://media.themoviedb.org/t/p/w710_and_h400_multi_faces/kONwFsTpchQj83Kh137rmtaD6WE.jpg 2x" alt="1992" />

                                                                <div className="play">
                                                                    <span className="glyphicons_v2 play invert svg"></span>
                                                                </div>
                                                            </a>
                                                        </div>

                                                        <div className="options" data-id="413846" data-object-id="57ca36b0c3a36827d300027e" data-media-type="movie" data-role="tooltip">
                                                            <a className="no_click" href="#" aria-label="View Item Options"><div className="glyphicons_v2 circle-more white"></div></a>
                                                        </div>
                                                    </div>

                                                    <div className="content">
                                                        <h2><a href="/movie/413846-1992" title="1992">1992</a></h2>
                                                        <h3>Get Paid</h3>
                                                    </div>
                                                </div>

                                                <div className="card video style_2 true" data-bg-image="https://media.themoviedb.org/t/p/w1920_and_h427_multi_faces/oBmwaZ3NVa3JyZnv1qCo0znxjUw.jpg">
                                                    <div className="image">
                                                        <div className="wrapper glyphicons_v2 picture grey no_image_holder">
                                                            <a className="image play_trailer" data-id="gRB5FNoRgEk" data-title="Gotcha" href="/movie/1029281-strange-darling" title="Strange Darling">
                                                                <img loading="lazy" className="backdrop w-full" src="https://media.themoviedb.org/t/p/w355_and_h200_multi_faces/oBmwaZ3NVa3JyZnv1qCo0znxjUw.jpg" srcSet="https://media.themoviedb.org/t/p/w355_and_h200_multi_faces/oBmwaZ3NVa3JyZnv1qCo0znxjUw.jpg 1x, https://media.themoviedb.org/t/p/w710_and_h400_multi_faces/oBmwaZ3NVa3JyZnv1qCo0znxjUw.jpg 2x" alt="Strange Darling" />

                                                                <div className="play">
                                                                    <span className="glyphicons_v2 play invert svg"></span>
                                                                </div>
                                                            </a>
                                                        </div>

                                                        <div className="options" data-id="1029281" data-object-id="63334bc77f054000967b2e75" data-media-type="movie" data-role="tooltip">
                                                            <a className="no_click" href="#" aria-label="View Item Options"><div className="glyphicons_v2 circle-more white"></div></a>
                                                        </div>
                                                    </div>

                                                    <div className="content">
                                                        <h2><a href="/movie/1029281-strange-darling" title="Strange Darling">Strange Darling</a></h2>
                                                        <h3>Gotcha</h3>
                                                    </div>
                                                </div>

                                                <div className="card video style_2 spacer"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section className="inner_content no_pad">
                            <div className="column_wrapper">
                                <div className="content_wrapper no_bottom_pad wrap">

                                    <div className="column">
                                        <div className="column_header">
                                            <h2>Sedang Populer</h2>

                                            <div className="selector_wrap">
                                                <div className="selector">
                                                    <div className="anchor selected">
                                                        <h3 className="leading-5"><a href="#" className="no_click" data-panel="popular_scroller" data-group="streaming">Streaming <span className="glyphicons_v2 chevron-down"></span></a></h3>
                                                        <div className="background"></div>
                                                    </div>

                                                    <div className="anchor ">
                                                        <h3 className="leading-5"><a href="#" className="no_click" data-panel="popular_scroller" data-group="on-tv">On TV <span className="glyphicons_v2 chevron-down"></span></a></h3>
                                                    </div>

                                                    <div className="anchor ">
                                                        <h3 className="leading-5"><a href="#" className="no_click" data-panel="popular_scroller" data-group="for-rent">For Rent <span className="glyphicons_v2 chevron-down"></span></a></h3>
                                                    </div>

                                                    <div className="anchor">
                                                        <h3 className="leading-5"><a href="#" className="no_click" data-panel="popular_scroller" data-group="in-theatres">In Theaters <span className="glyphicons_v2 chevron-down"></span></a></h3>
                                                        <div className="background hide"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div id="popular_scroller" className="media discover scroller_wrap should_fade is_fading">
                                            <div className="column_content flex scroller loaded">    <div className="card style_1">
                                                <div className="image">
                                                    <div className="wrapper glyphicons_v2 picture grey no_image_holder">
                                                        <a className="image" href="/movie/748783-the-garfield-movie" title="The Garfield Movie">
                                                            <img loading="lazy" className="poster w-full" src="https://media.themoviedb.org/t/p/w220_and_h330_face/p6AbOJvMQhBmffd0PIv0u8ghWeY.jpg" srcSet="https://media.themoviedb.org/t/p/w220_and_h330_face/p6AbOJvMQhBmffd0PIv0u8ghWeY.jpg 1x, https://media.themoviedb.org/t/p/w440_and_h660_face/p6AbOJvMQhBmffd0PIv0u8ghWeY.jpg 2x" alt="The Garfield Movie" />

                                                        </a>
                                                    </div>
                                                    <div className="options" data-id="748783" data-object-id="5f75bdf158efd30037b04d9b" data-media-type="movie" data-role="tooltip">
                                                        <a className="no_click" href="#" aria-label="View Item Options"><div className="glyphicons_v2 circle-more white"></div></a>
                                                    </div>
                                                </div>

                                                <div className="content">
                                                    <div className="consensus tight">
                                                        <div className="outer_ring">
                                                            <div className="user_score_chart 5f75bdf158efd30037b04d9b" data-percent="71" data-track-color="#204529" data-bar-color="#21d07a">
                                                                <div className="percent">
                                                                    <span className="icon icon-r71"></span>
                                                                </div>
                                                                <canvas height="34" width="34"></canvas></div>
                                                        </div>
                                                    </div>

                                                    <h2><a href="/movie/748783-the-garfield-movie" title="The Garfield Movie">The Garfield Movie</a></h2>
                                                    <p>Mei 23, 2024</p>
                                                </div>

                                                <div className="hover 748783"></div>
                                            </div>

                                                <div className="card style_1">
                                                    <div className="image">
                                                        <div className="wrapper glyphicons_v2 picture grey no_image_holder">
                                                            <a className="image" href="/tv/1416-grey-s-anatomy" title="Anatomi Grey">
                                                                <img loading="lazy" className="poster w-full" src="https://media.themoviedb.org/t/p/w220_and_h330_face/jcEl8SISNfGdlQFwLzeEtsjDvpw.jpg" srcSet="https://media.themoviedb.org/t/p/w220_and_h330_face/jcEl8SISNfGdlQFwLzeEtsjDvpw.jpg 1x, https://media.themoviedb.org/t/p/w440_and_h660_face/jcEl8SISNfGdlQFwLzeEtsjDvpw.jpg 2x" alt="Anatomi Grey" />

                                                            </a>
                                                        </div>
                                                        <div className="options" data-id="1416" data-object-id="5256ced419c2956ff608dd69" data-media-type="tv" data-role="tooltip">
                                                            <a className="no_click" href="#" aria-label="View Item Options"><div className="glyphicons_v2 circle-more white"></div></a>
                                                        </div>
                                                    </div>

                                                    <div className="content">
                                                        <div className="consensus tight">
                                                            <div className="outer_ring">
                                                                <div className="user_score_chart 5256ced419c2956ff608dd69" data-percent="82" data-track-color="#204529" data-bar-color="#21d07a">
                                                                    <div className="percent">
                                                                        <span className="icon icon-r82"></span>
                                                                    </div>
                                                                    <canvas height="34" width="34"></canvas></div>
                                                            </div>
                                                        </div>

                                                        <h2><a href="/tv/1416-grey-s-anatomy" title="Anatomi Grey">Anatomi Grey</a></h2>
                                                        <p>Mar 27, 2005</p>
                                                    </div>

                                                    <div className="hover 1416"></div>
                                                </div>

                                                <div className="card style_1">
                                                    <div className="image">
                                                        <div className="wrapper glyphicons_v2 picture grey no_image_holder">
                                                            <a className="image" href="/movie/799583-the-ministry-of-ungentlemanly-warfare" title="The Ministry of Ungentlemanly Warfare">
                                                                <img loading="lazy" className="poster w-full" src="https://media.themoviedb.org/t/p/w220_and_h330_face/8aF0iAKH9MJMYAZdi0Slg77RYa2.jpg" srcSet="https://media.themoviedb.org/t/p/w220_and_h330_face/8aF0iAKH9MJMYAZdi0Slg77RYa2.jpg 1x, https://media.themoviedb.org/t/p/w440_and_h660_face/8aF0iAKH9MJMYAZdi0Slg77RYa2.jpg 2x" alt="The Ministry of Ungentlemanly Warfare" />

                                                            </a>
                                                        </div>
                                                        <div className="options" data-id="799583" data-object-id="6033fa6a4083b30040531785" data-media-type="movie" data-role="tooltip">
                                                            <a className="no_click" href="#" aria-label="View Item Options"><div className="glyphicons_v2 circle-more white"></div></a>
                                                        </div>
                                                    </div>

                                                    <div className="content">
                                                        <div className="consensus tight">
                                                            <div className="outer_ring">
                                                                <div className="user_score_chart 6033fa6a4083b30040531785" data-percent="71" data-track-color="#204529" data-bar-color="#21d07a">
                                                                    <div className="percent">
                                                                        <span className="icon icon-r71"></span>
                                                                    </div>
                                                                    <canvas height="34" width="34"></canvas></div>
                                                            </div>
                                                        </div>

                                                        <h2><a href="/movie/799583-the-ministry-of-ungentlemanly-warfare" title="The Ministry of Ungentlemanly Warfare">The Ministry of Ungentlemanly Warfare</a></h2>
                                                        <p>Mei 10, 2024</p>
                                                    </div>

                                                    <div className="hover 799583"></div>
                                                </div>

                                                <div className="card style_1">
                                                    <div className="image">
                                                        <div className="wrapper glyphicons_v2 picture grey no_image_holder">
                                                            <a className="image" href="/tv/46262-doc-mcstuffins" title="Doc McStuffins">
                                                                <img loading="lazy" className="poster w-full" src="https://media.themoviedb.org/t/p/w220_and_h330_face/eeGWJaFkxX0vvOFFpNFXrh9QVxl.jpg" srcSet="https://media.themoviedb.org/t/p/w220_and_h330_face/eeGWJaFkxX0vvOFFpNFXrh9QVxl.jpg 1x, https://media.themoviedb.org/t/p/w440_and_h660_face/eeGWJaFkxX0vvOFFpNFXrh9QVxl.jpg 2x" alt="Doc McStuffins" />

                                                            </a>
                                                        </div>
                                                        <div className="options" data-id="46262" data-object-id="525970ab760ee34661a31dcc" data-media-type="tv" data-role="tooltip">
                                                            <a className="no_click" href="#" aria-label="View Item Options"><div className="glyphicons_v2 circle-more white"></div></a>
                                                        </div>
                                                    </div>

                                                    <div className="content">
                                                        <div className="consensus tight">
                                                            <div className="outer_ring">
                                                                <div className="user_score_chart 525970ab760ee34661a31dcc" data-percent="60" data-track-color="#423d0f" data-bar-color="#d2d531">
                                                                    <div className="percent">
                                                                        <span className="icon icon-r60"></span>
                                                                    </div>
                                                                    <canvas height="34" width="34"></canvas></div>
                                                            </div>
                                                        </div>

                                                        <h2><a href="/tv/46262-doc-mcstuffins" title="Doc McStuffins">Doc McStuffins</a></h2>
                                                        <p>Mar 23, 2012</p>
                                                    </div>

                                                    <div className="hover 46262"></div>
                                                </div>

                                                <div className="card style_1">
                                                    <div className="image">
                                                        <div className="wrapper glyphicons_v2 picture grey no_image_holder">
                                                            <a className="image" href="/tv/48891-brooklyn-nine-nine" title="Brooklyn Nine-Nine">
                                                                <img loading="lazy" className="poster w-full" src="https://media.themoviedb.org/t/p/w220_and_h330_face/hgRMSOt7a1b8qyQR68vUixJPang.jpg" srcSet="https://media.themoviedb.org/t/p/w220_and_h330_face/hgRMSOt7a1b8qyQR68vUixJPang.jpg 1x, https://media.themoviedb.org/t/p/w440_and_h660_face/hgRMSOt7a1b8qyQR68vUixJPang.jpg 2x" alt="Brooklyn Nine-Nine" />

                                                            </a>
                                                        </div>
                                                        <div className="options" data-id="48891" data-object-id="52597902760ee34661a6fe32" data-media-type="tv" data-role="tooltip">
                                                            <a className="no_click" href="#" aria-label="View Item Options"><div className="glyphicons_v2 circle-more white"></div></a>
                                                        </div>
                                                    </div>

                                                    <div className="content">
                                                        <div className="consensus tight">
                                                            <div className="outer_ring">
                                                                <div className="user_score_chart 52597902760ee34661a6fe32" data-percent="82" data-track-color="#204529" data-bar-color="#21d07a">
                                                                    <div className="percent">
                                                                        <span className="icon icon-r82"></span>
                                                                    </div>
                                                                    <canvas height="34" width="34"></canvas></div>
                                                            </div>
                                                        </div>

                                                        <h2><a href="/tv/48891-brooklyn-nine-nine" title="Brooklyn Nine-Nine">Brooklyn Nine-Nine</a></h2>
                                                        <p>Sep 17, 2013</p>
                                                    </div>

                                                    <div className="hover 48891"></div>
                                                </div>

                                                <div className="card style_1">
                                                    <div className="image">
                                                        <div className="wrapper glyphicons_v2 picture grey no_image_holder">
                                                            <a className="image" href="/tv/4057-criminal-minds" title="Pemikiran kriminal">
                                                                <img loading="lazy" className="poster w-full" src="https://media.themoviedb.org/t/p/w220_and_h330_face/wLMQebhTApmn4F6Fzg6FovdwVvL.jpg" srcSet="https://media.themoviedb.org/t/p/w220_and_h330_face/wLMQebhTApmn4F6Fzg6FovdwVvL.jpg 1x, https://media.themoviedb.org/t/p/w440_and_h660_face/wLMQebhTApmn4F6Fzg6FovdwVvL.jpg 2x" alt="Pemikiran kriminal" />

                                                            </a>
                                                        </div>
                                                        <div className="options" data-id="4057" data-object-id="52575b0219c29531db17f75b" data-media-type="tv" data-role="tooltip">
                                                            <a className="no_click" href="#" aria-label="View Item Options"><div className="glyphicons_v2 circle-more white"></div></a>
                                                        </div>
                                                    </div>

                                                    <div className="content">
                                                        <div className="consensus tight">
                                                            <div className="outer_ring">
                                                                <div className="user_score_chart 52575b0219c29531db17f75b" data-percent="83" data-track-color="#204529" data-bar-color="#21d07a">
                                                                    <div className="percent">
                                                                        <span className="icon icon-r83"></span>
                                                                    </div>
                                                                    <canvas height="34" width="34"></canvas></div>
                                                            </div>
                                                        </div>

                                                        <h2><a href="/tv/4057-criminal-minds" title="Pemikiran kriminal">Pemikiran kriminal</a></h2>
                                                        <p>Sep 22, 2005</p>
                                                    </div>

                                                    <div className="hover 4057"></div>
                                                </div>

                                                <div className="card style_1">
                                                    <div className="image">
                                                        <div className="wrapper glyphicons_v2 picture grey no_image_holder">
                                                            <a className="image" href="/tv/61175-steven-universe" title="Steven Universe">
                                                                <img loading="lazy" className="poster w-full" src="https://media.themoviedb.org/t/p/w220_and_h330_face/kJGyHGTvhKlUIgJ14tbr5op6cS1.jpg" srcSet="https://media.themoviedb.org/t/p/w220_and_h330_face/kJGyHGTvhKlUIgJ14tbr5op6cS1.jpg 1x, https://media.themoviedb.org/t/p/w440_and_h660_face/kJGyHGTvhKlUIgJ14tbr5op6cS1.jpg 2x" alt="Steven Universe" />

                                                            </a>
                                                        </div>
                                                        <div className="options" data-id="61175" data-object-id="53e6d389c3a36839a20006d6" data-media-type="tv" data-role="tooltip">
                                                            <a className="no_click" href="#" aria-label="View Item Options"><div className="glyphicons_v2 circle-more white"></div></a>
                                                        </div>
                                                    </div>

                                                    <div className="content">
                                                        <div className="consensus tight">
                                                            <div className="outer_ring">
                                                                <div className="user_score_chart 53e6d389c3a36839a20006d6" data-percent="84" data-track-color="#204529" data-bar-color="#21d07a">
                                                                    <div className="percent">
                                                                        <span className="icon icon-r84"></span>
                                                                    </div>
                                                                    <canvas height="34" width="34"></canvas></div>
                                                            </div>
                                                        </div>

                                                        <h2><a href="/tv/61175-steven-universe" title="Steven Universe">Steven Universe</a></h2>
                                                        <p>Nov 04, 2013</p>
                                                    </div>

                                                    <div className="hover 61175"></div>
                                                </div>

                                                <div className="card style_1">
                                                    <div className="image">
                                                        <div className="wrapper glyphicons_v2 picture grey no_image_holder">
                                                            <a className="image" href="/tv/84773-the-lord-of-the-rings-the-rings-of-power" title="The Lord of the Rings: Cincin Kekuasaan">
                                                                <img loading="lazy" className="poster w-full" src="https://media.themoviedb.org/t/p/w220_and_h330_face/kEb1WTpbzUdzg1hCO4rfE0qcepk.jpg" srcSet="https://media.themoviedb.org/t/p/w220_and_h330_face/kEb1WTpbzUdzg1hCO4rfE0qcepk.jpg 1x, https://media.themoviedb.org/t/p/w440_and_h660_face/kEb1WTpbzUdzg1hCO4rfE0qcepk.jpg 2x" alt="The Lord of the Rings: Cincin Kekuasaan" />

                                                            </a>
                                                        </div>
                                                        <div className="options" data-id="84773" data-object-id="5c0aa907c3a368252004c4f5" data-media-type="tv" data-role="tooltip">
                                                            <a className="no_click" href="#" aria-label="View Item Options"><div className="glyphicons_v2 circle-more white"></div></a>
                                                        </div>
                                                    </div>

                                                    <div className="content">
                                                        <div className="consensus tight">
                                                            <div className="outer_ring">
                                                                <div className="user_score_chart 5c0aa907c3a368252004c4f5" data-percent="73" data-track-color="#204529" data-bar-color="#21d07a">
                                                                    <div className="percent">
                                                                        <span className="icon icon-r73"></span>
                                                                    </div>
                                                                    <canvas height="34" width="34"></canvas></div>
                                                            </div>
                                                        </div>

                                                        <h2><a href="/tv/84773-the-lord-of-the-rings-the-rings-of-power" title="The Lord of the Rings: Cincin Kekuasaan">The Lord of the Rings: Cincin Kekuasaan</a></h2>
                                                        <p>Sep 01, 2022</p>
                                                    </div>

                                                    <div className="hover 84773"></div>
                                                </div>

                                                <div className="card style_1">
                                                    <div className="image">
                                                        <div className="wrapper glyphicons_v2 picture grey no_image_holder">
                                                            <a className="image" href="/tv/2691-two-and-a-half-men" title="Two and a Half Men">
                                                                <img loading="lazy" className="poster w-full" src="https://media.themoviedb.org/t/p/w220_and_h330_face/xgfjxyV3g1S68opzuvG6G87muDp.jpg" srcSet="https://media.themoviedb.org/t/p/w220_and_h330_face/xgfjxyV3g1S68opzuvG6G87muDp.jpg 1x, https://media.themoviedb.org/t/p/w440_and_h660_face/xgfjxyV3g1S68opzuvG6G87muDp.jpg 2x" alt="Two and a Half Men" />

                                                            </a>
                                                        </div>
                                                        <div className="options" data-id="2691" data-object-id="5257410b760ee36aaa0a18f9" data-media-type="tv" data-role="tooltip">
                                                            <a className="no_click" href="#" aria-label="View Item Options"><div className="glyphicons_v2 circle-more white"></div></a>
                                                        </div>
                                                    </div>

                                                    <div className="content">
                                                        <div className="consensus tight">
                                                            <div className="outer_ring">
                                                                <div className="user_score_chart 5257410b760ee36aaa0a18f9" data-percent="75" data-track-color="#204529" data-bar-color="#21d07a">
                                                                    <div className="percent">
                                                                        <span className="icon icon-r75"></span>
                                                                    </div>
                                                                    <canvas height="34" width="34"></canvas></div>
                                                            </div>
                                                        </div>

                                                        <h2><a href="/tv/2691-two-and-a-half-men" title="Two and a Half Men">Two and a Half Men</a></h2>
                                                        <p>Sep 22, 2003</p>
                                                    </div>

                                                    <div className="hover 2691"></div>
                                                </div>

                                                <div className="card style_1">
                                                    <div className="image">
                                                        <div className="wrapper glyphicons_v2 picture grey no_image_holder">
                                                            <a className="image" href="/movie/823464-godzilla-x-kong-the-new-empire" title="Godzilla x Kong: The New Empire">
                                                                <img loading="lazy" className="poster w-full" src="https://media.themoviedb.org/t/p/w220_and_h330_face/z1p34vh7dEOnLDmyCrlUVLuoDzd.jpg" srcSet="https://media.themoviedb.org/t/p/w220_and_h330_face/z1p34vh7dEOnLDmyCrlUVLuoDzd.jpg 1x, https://media.themoviedb.org/t/p/w440_and_h660_face/z1p34vh7dEOnLDmyCrlUVLuoDzd.jpg 2x" alt="Godzilla x Kong: The New Empire" />

                                                            </a>
                                                        </div>
                                                        <div className="options" data-id="823464" data-object-id="6088798184448e007932bc42" data-media-type="movie" data-role="tooltip">
                                                            <a className="no_click" href="#" aria-label="View Item Options"><div className="glyphicons_v2 circle-more white"></div></a>
                                                        </div>
                                                    </div>

                                                    <div className="content">
                                                        <div className="consensus tight">
                                                            <div className="outer_ring">
                                                                <div className="user_score_chart 6088798184448e007932bc42" data-percent="72" data-track-color="#204529" data-bar-color="#21d07a">
                                                                    <div className="percent">
                                                                        <span className="icon icon-r72"></span>
                                                                    </div>
                                                                    <canvas height="34" width="34"></canvas></div>
                                                            </div>
                                                        </div>

                                                        <h2><a href="/movie/823464-godzilla-x-kong-the-new-empire" title="Godzilla x Kong: The New Empire">Godzilla x Kong: The New Empire</a></h2>
                                                        <p>Mar 27, 2024</p>
                                                    </div>

                                                    <div className="hover 823464"></div>
                                                </div>

                                                <div className="card style_1">
                                                    <div className="image">
                                                        <div className="wrapper glyphicons_v2 picture grey no_image_holder">
                                                            <a className="image" href="/movie/4011-beetlejuice" title="Beetlejuice">
                                                                <img loading="lazy" className="poster w-full" src="https://media.themoviedb.org/t/p/w220_and_h330_face/nnl6OWkyPpuMm595hmAxNW3rZFn.jpg" srcSet="https://media.themoviedb.org/t/p/w220_and_h330_face/nnl6OWkyPpuMm595hmAxNW3rZFn.jpg 1x, https://media.themoviedb.org/t/p/w440_and_h660_face/nnl6OWkyPpuMm595hmAxNW3rZFn.jpg 2x" alt="Beetlejuice" />

                                                            </a>
                                                        </div>
                                                        <div className="options" data-id="4011" data-object-id="4bc89d43017a3c122d0289f2" data-media-type="movie" data-role="tooltip">
                                                            <a className="no_click" href="#" aria-label="View Item Options"><div className="glyphicons_v2 circle-more white"></div></a>
                                                        </div>
                                                    </div>

                                                    <div className="content">
                                                        <div className="consensus tight">
                                                            <div className="outer_ring">
                                                                <div className="user_score_chart 4bc89d43017a3c122d0289f2" data-percent="74" data-track-color="#204529" data-bar-color="#21d07a">
                                                                    <div className="percent">
                                                                        <span className="icon icon-r74"></span>
                                                                    </div>
                                                                    <canvas height="34" width="34"></canvas></div>
                                                            </div>
                                                        </div>

                                                        <h2><a href="/movie/4011-beetlejuice" title="Beetlejuice">Beetlejuice</a></h2>
                                                        <p>Mar 30, 1988</p>
                                                    </div>

                                                    <div className="hover 4011"></div>
                                                </div>

                                                <div className="card style_1">
                                                    <div className="image">
                                                        <div className="wrapper glyphicons_v2 picture grey no_image_holder">
                                                            <a className="image" href="/tv/456-the-simpsons" title="Simpsons">
                                                                <img loading="lazy" className="poster w-full" src="https://media.themoviedb.org/t/p/w220_and_h330_face/vHqeLzYl3dEAutojCO26g0LIkom.jpg" srcSet="https://media.themoviedb.org/t/p/w220_and_h330_face/vHqeLzYl3dEAutojCO26g0LIkom.jpg 1x, https://media.themoviedb.org/t/p/w440_and_h660_face/vHqeLzYl3dEAutojCO26g0LIkom.jpg 2x" alt="Simpsons" />

                                                            </a>
                                                        </div>
                                                        <div className="options" data-id="456" data-object-id="5256bdc219c2956ff60013cf" data-media-type="tv" data-role="tooltip">
                                                            <a className="no_click" href="#" aria-label="View Item Options"><div className="glyphicons_v2 circle-more white"></div></a>
                                                        </div>
                                                    </div>

                                                    <div className="content">
                                                        <div className="consensus tight">
                                                            <div className="outer_ring">
                                                                <div className="user_score_chart 5256bdc219c2956ff60013cf" data-percent="80" data-track-color="#204529" data-bar-color="#21d07a">
                                                                    <div className="percent">
                                                                        <span className="icon icon-r80"></span>
                                                                    </div>
                                                                    <canvas height="34" width="34"></canvas></div>
                                                            </div>
                                                        </div>

                                                        <h2><a href="/tv/456-the-simpsons" title="Simpsons">Simpsons</a></h2>
                                                        <p>Des 17, 1989</p>
                                                    </div>

                                                    <div className="hover 456"></div>
                                                </div>

                                                <div className="card style_1">
                                                    <div className="image">
                                                        <div className="wrapper glyphicons_v2 picture grey no_image_holder">
                                                            <a className="image" href="/movie/1010581-culpa-mia" title="My Fault">
                                                                <img loading="lazy" className="poster w-full" src="https://media.themoviedb.org/t/p/w220_and_h330_face/w46Vw536HwNnEzOa7J24YH9DPRS.jpg" srcSet="https://media.themoviedb.org/t/p/w220_and_h330_face/w46Vw536HwNnEzOa7J24YH9DPRS.jpg 1x, https://media.themoviedb.org/t/p/w440_and_h660_face/w46Vw536HwNnEzOa7J24YH9DPRS.jpg 2x" alt="My Fault" />

                                                            </a>
                                                        </div>
                                                        <div className="options" data-id="1010581" data-object-id="62f2a773e72fe800822db547" data-media-type="movie" data-role="tooltip">
                                                            <a className="no_click" href="#" aria-label="View Item Options"><div className="glyphicons_v2 circle-more white"></div></a>
                                                        </div>
                                                    </div>

                                                    <div className="content">
                                                        <div className="consensus tight">
                                                            <div className="outer_ring">
                                                                <div className="user_score_chart 62f2a773e72fe800822db547" data-percent="80" data-track-color="#204529" data-bar-color="#21d07a">
                                                                    <div className="percent">
                                                                        <span className="icon icon-r80"></span>
                                                                    </div>
                                                                    <canvas height="34" width="34"></canvas></div>
                                                            </div>
                                                        </div>

                                                        <h2><a href="/movie/1010581-culpa-mia" title="My Fault">My Fault</a></h2>
                                                        <p>Jun 08, 2023</p>
                                                    </div>

                                                    <div className="hover 1010581"></div>
                                                </div>

                                                <div className="card style_1">
                                                    <div className="image">
                                                        <div className="wrapper glyphicons_v2 picture grey no_image_holder">
                                                            <a className="image" href="/movie/299536-avengers-infinity-war" title="Avengers: Infinity War">
                                                                <img loading="lazy" className="poster w-full" src="https://media.themoviedb.org/t/p/w220_and_h330_face/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg" srcSet="https://media.themoviedb.org/t/p/w220_and_h330_face/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg 1x, https://media.themoviedb.org/t/p/w440_and_h660_face/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg 2x" alt="Avengers: Infinity War" />

                                                            </a>
                                                        </div>
                                                        <div className="options" data-id="299536" data-object-id="544fe91dc3a368022a00270a" data-media-type="movie" data-role="tooltip">
                                                            <a className="no_click" href="#" aria-label="View Item Options"><div className="glyphicons_v2 circle-more white"></div></a>
                                                        </div>
                                                    </div>

                                                    <div className="content">
                                                        <div className="consensus tight">
                                                            <div className="outer_ring">
                                                                <div className="user_score_chart 544fe91dc3a368022a00270a" data-percent="82" data-track-color="#204529" data-bar-color="#21d07a">
                                                                    <div className="percent">
                                                                        <span className="icon icon-r82"></span>
                                                                    </div>
                                                                    <canvas height="34" width="34"></canvas></div>
                                                            </div>
                                                        </div>

                                                        <h2><a href="/movie/299536-avengers-infinity-war" title="Avengers: Infinity War">Avengers: Infinity War</a></h2>
                                                        <p>Apr 25, 2018</p>
                                                    </div>

                                                    <div className="hover 299536"></div>
                                                </div>

                                                <div className="card style_1">
                                                    <div className="image">
                                                        <div className="wrapper glyphicons_v2 picture grey no_image_holder">
                                                            <a className="image" href="/movie/653346-kingdom-of-the-planet-of-the-apes" title="Kerajaan Planet Kera">
                                                                <img loading="lazy" className="poster w-full" src="https://media.themoviedb.org/t/p/w220_and_h330_face/gKkl37BQuKTanygYQG1pyYgLVgf.jpg" srcSet="https://media.themoviedb.org/t/p/w220_and_h330_face/gKkl37BQuKTanygYQG1pyYgLVgf.jpg 1x, https://media.themoviedb.org/t/p/w440_and_h660_face/gKkl37BQuKTanygYQG1pyYgLVgf.jpg 2x" alt="Kerajaan Planet Kera" />

                                                            </a>
                                                        </div>
                                                        <div className="options" data-id="653346" data-object-id="5de6f6133faba00015133c4d" data-media-type="movie" data-role="tooltip">
                                                            <a className="no_click" href="#" aria-label="View Item Options"><div className="glyphicons_v2 circle-more white"></div></a>
                                                        </div>
                                                    </div>

                                                    <div className="content">
                                                        <div className="consensus tight">
                                                            <div className="outer_ring">
                                                                <div className="user_score_chart 5de6f6133faba00015133c4d" data-percent="71" data-track-color="#204529" data-bar-color="#21d07a">
                                                                    <div className="percent">
                                                                        <span className="icon icon-r71"></span>
                                                                    </div>
                                                                    <canvas height="34" width="34"></canvas></div>
                                                            </div>
                                                        </div>

                                                        <h2><a href="/movie/653346-kingdom-of-the-planet-of-the-apes" title="Kerajaan Planet Kera">Kerajaan Planet Kera</a></h2>
                                                        <p>Mei 08, 2024</p>
                                                    </div>

                                                    <div className="hover 653346"></div>
                                                </div>

                                                <div className="card style_1">
                                                    <div className="image">
                                                        <div className="wrapper glyphicons_v2 picture grey no_image_holder">
                                                            <a className="image" href="/movie/1002088" title="Mission: Cross">
                                                                <img loading="lazy" className="poster w-full" src="https://media.themoviedb.org/t/p/w220_and_h330_face/aE9WqOApdRYsowsGE0118dyA4c9.jpg" srcSet="https://media.themoviedb.org/t/p/w220_and_h330_face/aE9WqOApdRYsowsGE0118dyA4c9.jpg 1x, https://media.themoviedb.org/t/p/w440_and_h660_face/aE9WqOApdRYsowsGE0118dyA4c9.jpg 2x" alt="Mission: Cross" />

                                                            </a>
                                                        </div>
                                                        <div className="options" data-id="1002088" data-object-id="62d7ebfa1d78f2004f5e8264" data-media-type="movie" data-role="tooltip">
                                                            <a className="no_click" href="#" aria-label="View Item Options"><div className="glyphicons_v2 circle-more white"></div></a>
                                                        </div>
                                                    </div>

                                                    <div className="content">
                                                        <div className="consensus tight">
                                                            <div className="outer_ring">
                                                                <div className="user_score_chart 62d7ebfa1d78f2004f5e8264" data-percent="69" data-track-color="#423d0f" data-bar-color="#d2d531">
                                                                    <div className="percent">
                                                                        <span className="icon icon-r69"></span>
                                                                    </div>
                                                                    <canvas height="34" width="34"></canvas></div>
                                                            </div>
                                                        </div>

                                                        <h2><a href="/movie/1002088" title="Mission: Cross">Mission: Cross</a></h2>
                                                        <p>Ags 05, 2024</p>
                                                    </div>

                                                    <div className="hover 1002088"></div>
                                                </div>

                                                <div className="card style_1">
                                                    <div className="image">
                                                        <div className="wrapper glyphicons_v2 picture grey no_image_holder">
                                                            <a className="image" href="/movie/1011985-kung-fu-panda-4" title="Kung Fu Panda 4">
                                                                <img loading="lazy" className="poster w-full" src="https://media.themoviedb.org/t/p/w220_and_h330_face/kDp1vUBnMpe8ak4rjgl3cLELqjU.jpg" srcSet="https://media.themoviedb.org/t/p/w220_and_h330_face/kDp1vUBnMpe8ak4rjgl3cLELqjU.jpg 1x, https://media.themoviedb.org/t/p/w440_and_h660_face/kDp1vUBnMpe8ak4rjgl3cLELqjU.jpg 2x" alt="Kung Fu Panda 4" />

                                                            </a>
                                                        </div>
                                                        <div className="options" data-id="1011985" data-object-id="62f6b3735b2f47007ffcbd93" data-media-type="movie" data-role="tooltip">
                                                            <a className="no_click" href="#" aria-label="View Item Options"><div className="glyphicons_v2 circle-more white"></div></a>
                                                        </div>
                                                    </div>

                                                    <div className="content">
                                                        <div className="consensus tight">
                                                            <div className="outer_ring">
                                                                <div className="user_score_chart 62f6b3735b2f47007ffcbd93" data-percent="71" data-track-color="#204529" data-bar-color="#21d07a">
                                                                    <div className="percent">
                                                                        <span className="icon icon-r71"></span>
                                                                    </div>
                                                                    <canvas height="34" width="34"></canvas></div>
                                                            </div>
                                                        </div>

                                                        <h2><a href="/movie/1011985-kung-fu-panda-4" title="Kung Fu Panda 4">Kung Fu Panda 4</a></h2>
                                                        <p>Mar 06, 2024</p>
                                                    </div>

                                                    <div className="hover 1011985"></div>
                                                </div>

                                                <div className="card style_1">
                                                    <div className="image">
                                                        <div className="wrapper glyphicons_v2 picture grey no_image_holder">
                                                            <a className="image" href="/tv/76479-the-boys" title="The Boys">
                                                                <img loading="lazy" className="poster w-full" src="https://media.themoviedb.org/t/p/w220_and_h330_face/2zmTngn1tYC1AvfnrFLhxeD82hz.jpg" srcSet="https://media.themoviedb.org/t/p/w220_and_h330_face/2zmTngn1tYC1AvfnrFLhxeD82hz.jpg 1x, https://media.themoviedb.org/t/p/w440_and_h660_face/2zmTngn1tYC1AvfnrFLhxeD82hz.jpg 2x" alt="The Boys" />

                                                            </a>
                                                        </div>
                                                        <div className="options" data-id="76479" data-object-id="5a60c62a0e0a26102b00056a" data-media-type="tv" data-role="tooltip">
                                                            <a className="no_click" href="#" aria-label="View Item Options"><div className="glyphicons_v2 circle-more white"></div></a>
                                                        </div>
                                                    </div>

                                                    <div className="content">
                                                        <div className="consensus tight">
                                                            <div className="outer_ring">
                                                                <div className="user_score_chart 5a60c62a0e0a26102b00056a" data-percent="85" data-track-color="#204529" data-bar-color="#21d07a">
                                                                    <div className="percent">
                                                                        <span className="icon icon-r85"></span>
                                                                    </div>
                                                                    <canvas height="34" width="34"></canvas></div>
                                                            </div>
                                                        </div>

                                                        <h2><a href="/tv/76479-the-boys" title="The Boys">The Boys</a></h2>
                                                        <p>Jul 25, 2019</p>
                                                    </div>

                                                    <div className="hover 76479"></div>
                                                </div>

                                                <div className="card style_1">
                                                    <div className="image">
                                                        <div className="wrapper glyphicons_v2 picture grey no_image_holder">
                                                            <a className="image" href="/movie/1059064-the-instigators" title="The Instigators">
                                                                <img loading="lazy" className="poster w-full" src="https://media.themoviedb.org/t/p/w220_and_h330_face/pIz9csYn1yjrzQi0BuBZNJrTMi0.jpg" srcSet="https://media.themoviedb.org/t/p/w220_and_h330_face/pIz9csYn1yjrzQi0BuBZNJrTMi0.jpg 1x, https://media.themoviedb.org/t/p/w440_and_h660_face/pIz9csYn1yjrzQi0BuBZNJrTMi0.jpg 2x" alt="The Instigators" />

                                                            </a>
                                                        </div>
                                                        <div className="options" data-id="1059064" data-object-id="63924341cee2f6007afcffc6" data-media-type="movie" data-role="tooltip">
                                                            <a className="no_click" href="#" aria-label="View Item Options"><div className="glyphicons_v2 circle-more white"></div></a>
                                                        </div>
                                                    </div>

                                                    <div className="content">
                                                        <div className="consensus tight">
                                                            <div className="outer_ring">
                                                                <div className="user_score_chart 63924341cee2f6007afcffc6" data-percent="62" data-track-color="#423d0f" data-bar-color="#d2d531">
                                                                    <div className="percent">
                                                                        <span className="icon icon-r62"></span>
                                                                    </div>
                                                                    <canvas height="34" width="34"></canvas></div>
                                                            </div>
                                                        </div>

                                                        <h2><a href="/movie/1059064-the-instigators" title="The Instigators">The Instigators</a></h2>
                                                        <p>Ags 09, 2024</p>
                                                    </div>

                                                    <div className="hover 1059064"></div>
                                                </div>

                                                <div className="card style_1">
                                                    <div className="image">
                                                        <div className="wrapper glyphicons_v2 picture grey no_image_holder">
                                                            <a className="image" href="/tv/1622-supernatural" title="Supernatural">
                                                                <img loading="lazy" className="poster w-full" src="https://media.themoviedb.org/t/p/w220_and_h330_face/KoYWXbnYuS3b0GyQPkbuexlVK9.jpg" srcSet="https://media.themoviedb.org/t/p/w220_and_h330_face/KoYWXbnYuS3b0GyQPkbuexlVK9.jpg 1x, https://media.themoviedb.org/t/p/w440_and_h660_face/KoYWXbnYuS3b0GyQPkbuexlVK9.jpg 2x" alt="Supernatural" />

                                                            </a>
                                                        </div>
                                                        <div className="options" data-id="1622" data-object-id="52570e0a19c295731c001733" data-media-type="tv" data-role="tooltip">
                                                            <a className="no_click" href="#" aria-label="View Item Options"><div className="glyphicons_v2 circle-more white"></div></a>
                                                        </div>
                                                    </div>

                                                    <div className="content">
                                                        <div className="consensus tight">
                                                            <div className="outer_ring">
                                                                <div className="user_score_chart 52570e0a19c295731c001733" data-percent="83" data-track-color="#204529" data-bar-color="#21d07a">
                                                                    <div className="percent">
                                                                        <span className="icon icon-r83"></span>
                                                                    </div>
                                                                    <canvas height="34" width="34"></canvas></div>
                                                            </div>
                                                        </div>

                                                        <h2><a href="/tv/1622-supernatural" title="Supernatural">Supernatural</a></h2>
                                                        <p>Sep 13, 2005</p>
                                                    </div>

                                                    <div className="hover 1622"></div>
                                                </div>

                                                <div className="card style_1">
                                                    <div className="image">
                                                        <div className="wrapper glyphicons_v2 picture grey no_image_holder">
                                                            <a className="image" href="/movie/1281826-one-fast-move" title="One Fast Move">
                                                                <img loading="lazy" className="poster w-full" src="https://media.themoviedb.org/t/p/w220_and_h330_face/hdBUjfbdr1ymS0kycAT7qguOmWA.jpg" srcSet="https://media.themoviedb.org/t/p/w220_and_h330_face/hdBUjfbdr1ymS0kycAT7qguOmWA.jpg 1x, https://media.themoviedb.org/t/p/w440_and_h660_face/hdBUjfbdr1ymS0kycAT7qguOmWA.jpg 2x" alt="One Fast Move" />

                                                            </a>
                                                        </div>
                                                        <div className="options" data-id="1281826" data-object-id="662f0d93072166012469f89f" data-media-type="movie" data-role="tooltip">
                                                            <a className="no_click" href="#" aria-label="View Item Options"><div className="glyphicons_v2 circle-more white"></div></a>
                                                        </div>
                                                    </div>

                                                    <div className="content">
                                                        <div className="consensus tight">
                                                            <div className="outer_ring">
                                                                <div className="user_score_chart 662f0d93072166012469f89f" data-percent="68" data-track-color="#423d0f" data-bar-color="#d2d531">
                                                                    <div className="percent">
                                                                        <span className="icon icon-r68"></span>
                                                                    </div>
                                                                    <canvas height="34" width="34"></canvas></div>
                                                            </div>
                                                        </div>

                                                        <h2><a href="/movie/1281826-one-fast-move" title="One Fast Move">One Fast Move</a></h2>
                                                        <p>Ags 07, 2024</p>
                                                    </div>

                                                    <div className="hover 1281826"></div>
                                                </div>

                                                <div className="card style_1">
                                                    <div className="image">
                                                        <div className="wrapper glyphicons_v2 picture grey no_image_holder">
                                                            <a className="image" href="/movie/786892-furiosa-a-mad-max-saga" title="Furiosa: A Mad Max Saga">
                                                                <img loading="lazy" className="poster w-full" src="https://media.themoviedb.org/t/p/w220_and_h330_face/iADOJ8Zymht2JPMoy3R7xceZprc.jpg" srcSet="https://media.themoviedb.org/t/p/w220_and_h330_face/iADOJ8Zymht2JPMoy3R7xceZprc.jpg 1x, https://media.themoviedb.org/t/p/w440_and_h660_face/iADOJ8Zymht2JPMoy3R7xceZprc.jpg 2x" alt="Furiosa: A Mad Max Saga" />

                                                            </a>
                                                        </div>
                                                        <div className="options" data-id="786892" data-object-id="6003f7d4cb3084003edde0ec" data-media-type="movie" data-role="tooltip">
                                                            <a className="no_click" href="#" aria-label="View Item Options"><div className="glyphicons_v2 circle-more white"></div></a>
                                                        </div>
                                                    </div>

                                                    <div className="content">
                                                        <div className="consensus tight">
                                                            <div className="outer_ring">
                                                                <div className="user_score_chart 6003f7d4cb3084003edde0ec" data-percent="76" data-track-color="#204529" data-bar-color="#21d07a">
                                                                    <div className="percent">
                                                                        <span className="icon icon-r76"></span>
                                                                    </div>
                                                                    <canvas height="34" width="34"></canvas></div>
                                                            </div>
                                                        </div>

                                                        <h2><a href="/movie/786892-furiosa-a-mad-max-saga" title="Furiosa: A Mad Max Saga">Furiosa: A Mad Max Saga</a></h2>
                                                        <p>Mei 22, 2024</p>
                                                    </div>

                                                    <div className="hover 786892"></div>
                                                </div>

                                                <div className="card style_1">
                                                    <div className="image">
                                                        <div className="wrapper glyphicons_v2 picture grey no_image_holder">
                                                            <a className="image" href="/movie/1094138-jackpot" title="Jackpot!">
                                                                <img loading="lazy" className="poster w-full" src="https://media.themoviedb.org/t/p/w220_and_h330_face/84Ub8XwJ2Y7XuyMKsbXUj1aqoDo.jpg" srcSet="https://media.themoviedb.org/t/p/w220_and_h330_face/84Ub8XwJ2Y7XuyMKsbXUj1aqoDo.jpg 1x, https://media.themoviedb.org/t/p/w440_and_h660_face/84Ub8XwJ2Y7XuyMKsbXUj1aqoDo.jpg 2x" alt="Jackpot!" />

                                                            </a>
                                                        </div>
                                                        <div className="options" data-id="1094138" data-object-id="6400da047a4ee700aaada16c" data-media-type="movie" data-role="tooltip">
                                                            <a className="no_click" href="#" aria-label="View Item Options"><div className="glyphicons_v2 circle-more white"></div></a>
                                                        </div>
                                                    </div>

                                                    <div className="content">
                                                        <div className="consensus tight">
                                                            <div className="outer_ring">
                                                                <div className="user_score_chart 6400da047a4ee700aaada16c" data-percent="64" data-track-color="#423d0f" data-bar-color="#d2d531">
                                                                    <div className="percent">
                                                                        <span className="icon icon-r64"></span>
                                                                    </div>
                                                                    <canvas height="34" width="34"></canvas></div>
                                                            </div>
                                                        </div>

                                                        <h2><a href="/movie/1094138-jackpot" title="Jackpot!">Jackpot!</a></h2>
                                                        <p>Ags 13, 2024</p>
                                                    </div>

                                                    <div className="hover 1094138"></div>
                                                </div>

                                                <div className="card style_1">
                                                    <div className="image">
                                                        <div className="wrapper glyphicons_v2 picture grey no_image_holder">
                                                            <a className="image" href="/tv/4614-ncis" title="NCIS">
                                                                <img loading="lazy" className="poster w-full" src="https://media.themoviedb.org/t/p/w220_and_h330_face/2exOHePjOTquUsbThPGhuEjYTyA.jpg" srcSet="https://media.themoviedb.org/t/p/w220_and_h330_face/2exOHePjOTquUsbThPGhuEjYTyA.jpg 1x, https://media.themoviedb.org/t/p/w440_and_h660_face/2exOHePjOTquUsbThPGhuEjYTyA.jpg 2x" alt="NCIS" />

                                                            </a>
                                                        </div>
                                                        <div className="options" data-id="4614" data-object-id="5257765d760ee36aaa522906" data-media-type="tv" data-role="tooltip">
                                                            <a className="no_click" href="#" aria-label="View Item Options"><div className="glyphicons_v2 circle-more white"></div></a>
                                                        </div>
                                                    </div>

                                                    <div className="content">
                                                        <div className="consensus tight">
                                                            <div className="outer_ring">
                                                                <div className="user_score_chart 5257765d760ee36aaa522906" data-percent="76" data-track-color="#204529" data-bar-color="#21d07a">
                                                                    <div className="percent">
                                                                        <span className="icon icon-r76"></span>
                                                                    </div>
                                                                    <canvas height="34" width="34"></canvas></div>
                                                            </div>
                                                        </div>

                                                        <h2><a href="/tv/4614-ncis" title="NCIS">NCIS</a></h2>
                                                        <p>Sep 23, 2003</p>
                                                    </div>

                                                    <div className="hover 4614"></div>
                                                </div>

                                                <div className="card style_1">
                                                    <div className="image">
                                                        <div className="wrapper glyphicons_v2 picture grey no_image_holder">
                                                            <a className="image" href="/tv/1434-family-guy" title="Family Guy">
                                                                <img loading="lazy" className="poster w-full" src="https://media.themoviedb.org/t/p/w220_and_h330_face/y0HUz4eUNUe3TeEd8fQWYazPaC7.jpg" srcSet="https://media.themoviedb.org/t/p/w220_and_h330_face/y0HUz4eUNUe3TeEd8fQWYazPaC7.jpg 1x, https://media.themoviedb.org/t/p/w440_and_h660_face/y0HUz4eUNUe3TeEd8fQWYazPaC7.jpg 2x" alt="Family Guy" />

                                                            </a>
                                                        </div>
                                                        <div className="options" data-id="1434" data-object-id="5256e84619c2956ff60ede3f" data-media-type="tv" data-role="tooltip">
                                                            <a className="no_click" href="#" aria-label="View Item Options"><div className="glyphicons_v2 circle-more white"></div></a>
                                                        </div>
                                                    </div>

                                                    <div className="content">
                                                        <div className="consensus tight">
                                                            <div className="outer_ring">
                                                                <div className="user_score_chart 5256e84619c2956ff60ede3f" data-percent="74" data-track-color="#204529" data-bar-color="#21d07a">
                                                                    <div className="percent">
                                                                        <span className="icon icon-r74"></span>
                                                                    </div>
                                                                    <canvas height="34" width="34"></canvas></div>
                                                            </div>
                                                        </div>

                                                        <h2><a href="/tv/1434-family-guy" title="Family Guy">Family Guy</a></h2>
                                                        <p>Jan 31, 1999</p>
                                                    </div>

                                                    <div className="hover 1434"></div>
                                                </div>

                                                <div className="card style_1">
                                                    <div className="image">
                                                        <div className="wrapper glyphicons_v2 picture grey no_image_holder">
                                                            <a className="image" href="/movie/974262-descendants-the-rise-of-red" title="Descendants: The Rise of Red">
                                                                <img loading="lazy" className="poster w-full" src="https://media.themoviedb.org/t/p/w220_and_h330_face/vMT4zrbAfWhsWt4ni4ah8wGxF3.jpg" srcSet="https://media.themoviedb.org/t/p/w220_and_h330_face/vMT4zrbAfWhsWt4ni4ah8wGxF3.jpg 1x, https://media.themoviedb.org/t/p/w440_and_h660_face/vMT4zrbAfWhsWt4ni4ah8wGxF3.jpg 2x" alt="Descendants: The Rise of Red" />

                                                            </a>
                                                        </div>
                                                        <div className="options" data-id="974262" data-object-id="627aacd3211ce50c2b73dd54" data-media-type="movie" data-role="tooltip">
                                                            <a className="no_click" href="#" aria-label="View Item Options"><div className="glyphicons_v2 circle-more white"></div></a>
                                                        </div>
                                                    </div>

                                                    <div className="content">
                                                        <div className="consensus tight">
                                                            <div className="outer_ring">
                                                                <div className="user_score_chart 627aacd3211ce50c2b73dd54" data-percent="70" data-track-color="#204529" data-bar-color="#21d07a">
                                                                    <div className="percent">
                                                                        <span className="icon icon-r70"></span>
                                                                    </div>
                                                                    <canvas height="34" width="34"></canvas></div>
                                                            </div>
                                                        </div>

                                                        <h2><a href="/movie/974262-descendants-the-rise-of-red" title="Descendants: The Rise of Red">Descendants: The Rise of Red</a></h2>
                                                        <p>Jul 12, 2024</p>
                                                    </div>

                                                    <div className="hover 974262"></div>
                                                </div>

                                                <div className="card style_1">
                                                    <div className="image">
                                                        <div className="wrapper glyphicons_v2 picture grey no_image_holder">
                                                            <a className="image" href="/tv/38693-ninjago-masters-of-spinjitzu" title="Ninjago: Masters of Spinjitzu">
                                                                <img loading="lazy" className="poster w-full" src="https://media.themoviedb.org/t/p/w220_and_h330_face/fqb9X4th2p2voefRLqdv1xoZQmC.jpg" srcSet="https://media.themoviedb.org/t/p/w220_and_h330_face/fqb9X4th2p2voefRLqdv1xoZQmC.jpg 1x, https://media.themoviedb.org/t/p/w440_and_h660_face/fqb9X4th2p2voefRLqdv1xoZQmC.jpg 2x" alt="Ninjago: Masters of Spinjitzu" />

                                                            </a>
                                                        </div>
                                                        <div className="options" data-id="38693" data-object-id="5258edba760ee346618d2c5a" data-media-type="tv" data-role="tooltip">
                                                            <a className="no_click" href="#" aria-label="View Item Options"><div className="glyphicons_v2 circle-more white"></div></a>
                                                        </div>
                                                    </div>

                                                    <div className="content">
                                                        <div className="consensus tight">
                                                            <div className="outer_ring">
                                                                <div className="user_score_chart 5258edba760ee346618d2c5a" data-percent="78" data-track-color="#204529" data-bar-color="#21d07a">
                                                                    <div className="percent">
                                                                        <span className="icon icon-r78"></span>
                                                                    </div>
                                                                    <canvas height="34" width="34"></canvas></div>
                                                            </div>
                                                        </div>

                                                        <h2><a href="/tv/38693-ninjago-masters-of-spinjitzu" title="Ninjago: Masters of Spinjitzu">Ninjago: Masters of Spinjitzu</a></h2>
                                                        <p>Jan 11, 2012</p>
                                                    </div>

                                                    <div className="hover 38693"></div>
                                                </div>

                                                <div className="card style_1">
                                                    <div className="image">
                                                        <div className="wrapper glyphicons_v2 picture grey no_image_holder">
                                                            <a className="image" href="/tv/63174-lucifer" title="Lucifer">
                                                                <img loading="lazy" className="poster w-full" src="https://media.themoviedb.org/t/p/w220_and_h330_face/ekZobS8isE6mA53RAiGDG93hBxL.jpg" srcSet="https://media.themoviedb.org/t/p/w220_and_h330_face/ekZobS8isE6mA53RAiGDG93hBxL.jpg 1x, https://media.themoviedb.org/t/p/w440_and_h660_face/ekZobS8isE6mA53RAiGDG93hBxL.jpg 2x" alt="Lucifer" />

                                                            </a>
                                                        </div>
                                                        <div className="options" data-id="63174" data-object-id="559cb1209251414206000bc0" data-media-type="tv" data-role="tooltip">
                                                            <a className="no_click" href="#" aria-label="View Item Options"><div className="glyphicons_v2 circle-more white"></div></a>
                                                        </div>
                                                    </div>

                                                    <div className="content">
                                                        <div className="consensus tight">
                                                            <div className="outer_ring">
                                                                <div className="user_score_chart 559cb1209251414206000bc0" data-percent="85" data-track-color="#204529" data-bar-color="#21d07a">
                                                                    <div className="percent">
                                                                        <span className="icon icon-r85"></span>
                                                                    </div>
                                                                    <canvas height="34" width="34"></canvas></div>
                                                            </div>
                                                        </div>

                                                        <h2><a href="/tv/63174-lucifer" title="Lucifer">Lucifer</a></h2>
                                                        <p>Jan 25, 2016</p>
                                                    </div>

                                                    <div className="hover 63174"></div>
                                                </div>

                                                <div className="card style_1">
                                                    <div className="image">
                                                        <div className="wrapper glyphicons_v2 picture grey no_image_holder">
                                                            <a className="image" href="/tv/31132-regular-show" title="Regular Show">
                                                                <img loading="lazy" className="poster w-full" src="https://media.themoviedb.org/t/p/w220_and_h330_face/mS5SLxMYcKfUxA0utBSR5MOAWWr.jpg" srcSet="https://media.themoviedb.org/t/p/w220_and_h330_face/mS5SLxMYcKfUxA0utBSR5MOAWWr.jpg 1x, https://media.themoviedb.org/t/p/w440_and_h660_face/mS5SLxMYcKfUxA0utBSR5MOAWWr.jpg 2x" alt="Regular Show" />

                                                            </a>
                                                        </div>
                                                        <div className="options" data-id="31132" data-object-id="52589cbd760ee3466161068e" data-media-type="tv" data-role="tooltip">
                                                            <a className="no_click" href="#" aria-label="View Item Options"><div className="glyphicons_v2 circle-more white"></div></a>
                                                        </div>
                                                    </div>

                                                    <div className="content">
                                                        <div className="consensus tight">
                                                            <div className="outer_ring">
                                                                <div className="user_score_chart 52589cbd760ee3466161068e" data-percent="86" data-track-color="#204529" data-bar-color="#21d07a">
                                                                    <div className="percent">
                                                                        <span className="icon icon-r86"></span>
                                                                    </div>
                                                                    <canvas height="34" width="34"></canvas></div>
                                                            </div>
                                                        </div>

                                                        <h2><a href="/tv/31132-regular-show" title="Regular Show">Regular Show</a></h2>
                                                        <p>Sep 06, 2010</p>
                                                    </div>

                                                    <div className="hover 31132"></div>
                                                </div>

                                                <div className="card style_1">
                                                    <div className="image">
                                                        <div className="wrapper glyphicons_v2 picture grey no_image_holder">
                                                            <a className="image" href="/movie/718821-twisters" title="Twisters">
                                                                <img loading="lazy" className="poster w-full" src="https://media.themoviedb.org/t/p/w220_and_h330_face/pjnD08FlMAIXsfOLKQbvmO0f0MD.jpg" srcSet="https://media.themoviedb.org/t/p/w220_and_h330_face/pjnD08FlMAIXsfOLKQbvmO0f0MD.jpg 1x, https://media.themoviedb.org/t/p/w440_and_h660_face/pjnD08FlMAIXsfOLKQbvmO0f0MD.jpg 2x" alt="Twisters" />

                                                            </a>
                                                        </div>
                                                        <div className="options" data-id="718821" data-object-id="5ef451d4bccf1e0038383e47" data-media-type="movie" data-role="tooltip">
                                                            <a className="no_click" href="#" aria-label="View Item Options"><div className="glyphicons_v2 circle-more white"></div></a>
                                                        </div>
                                                    </div>

                                                    <div className="content">
                                                        <div className="consensus tight">
                                                            <div className="outer_ring">
                                                                <div className="user_score_chart 5ef451d4bccf1e0038383e47" data-percent="70" data-track-color="#204529" data-bar-color="#21d07a">
                                                                    <div className="percent">
                                                                        <span className="icon icon-r70"></span>
                                                                    </div>
                                                                    <canvas height="34" width="34"></canvas></div>
                                                            </div>
                                                        </div>

                                                        <h2><a href="/movie/718821-twisters" title="Twisters">Twisters</a></h2>
                                                        <p>Jul 10, 2024</p>
                                                    </div>

                                                    <div className="hover 718821"></div>
                                                </div>

                                                <div className="card style_1">
                                                    <div className="image">
                                                        <div className="wrapper glyphicons_v2 picture grey no_image_holder">
                                                            <a className="image" href="/movie/831815-saving-bikini-bottom-the-sandy-cheeks-movie" title="Saving Bikini Bottom: The Sandy Cheeks Movie">
                                                                <img loading="lazy" className="poster w-full" src="https://media.themoviedb.org/t/p/w220_and_h330_face/30YnfZdMNIV7noWLdvmcJS0cbnQ.jpg" srcSet="https://media.themoviedb.org/t/p/w220_and_h330_face/30YnfZdMNIV7noWLdvmcJS0cbnQ.jpg 1x, https://media.themoviedb.org/t/p/w440_and_h660_face/30YnfZdMNIV7noWLdvmcJS0cbnQ.jpg 2x" alt="Saving Bikini Bottom: The Sandy Cheeks Movie" />

                                                            </a>
                                                        </div>
                                                        <div className="options" data-id="831815" data-object-id="60a6ccb91689350029c3d27e" data-media-type="movie" data-role="tooltip">
                                                            <a className="no_click" href="#" aria-label="View Item Options"><div className="glyphicons_v2 circle-more white"></div></a>
                                                        </div>
                                                    </div>

                                                    <div className="content">
                                                        <div className="consensus tight">
                                                            <div className="outer_ring">
                                                                <div className="user_score_chart 60a6ccb91689350029c3d27e" data-percent="64" data-track-color="#423d0f" data-bar-color="#d2d531">
                                                                    <div className="percent">
                                                                        <span className="icon icon-r64"></span>
                                                                    </div>
                                                                    <canvas height="34" width="34"></canvas></div>
                                                            </div>
                                                        </div>

                                                        <h2><a href="/movie/831815-saving-bikini-bottom-the-sandy-cheeks-movie" title="Saving Bikini Bottom: The Sandy Cheeks Movie">Saving Bikini Bottom: The Sandy Cheeks Movie</a></h2>
                                                        <p>Ags 02, 2024</p>
                                                    </div>

                                                    <div className="hover 831815"></div>
                                                </div>

                                                <div className="card style_1">
                                                    <div className="image">
                                                        <div className="wrapper glyphicons_v2 picture grey no_image_holder">
                                                            <a className="image" href="/tv/65763-new-looney-tunes" title="New Looney Tunes">
                                                                <img loading="lazy" className="poster w-full" src="https://media.themoviedb.org/t/p/w220_and_h330_face/prMr01vuNZc42SAuaa1Kzyh9iyd.jpg" srcSet="https://media.themoviedb.org/t/p/w220_and_h330_face/prMr01vuNZc42SAuaa1Kzyh9iyd.jpg 1x, https://media.themoviedb.org/t/p/w440_and_h660_face/prMr01vuNZc42SAuaa1Kzyh9iyd.jpg 2x" alt="New Looney Tunes" />

                                                            </a>
                                                        </div>
                                                        <div className="options" data-id="65763" data-object-id="56d66b509251414291000524" data-media-type="tv" data-role="tooltip">
                                                            <a className="no_click" href="#" aria-label="View Item Options"><div className="glyphicons_v2 circle-more white"></div></a>
                                                        </div>
                                                    </div>

                                                    <div className="content">
                                                        <div className="consensus tight">
                                                            <div className="outer_ring">
                                                                <div className="user_score_chart 56d66b509251414291000524" data-percent="71" data-track-color="#204529" data-bar-color="#21d07a">
                                                                    <div className="percent">
                                                                        <span className="icon icon-r71"></span>
                                                                    </div>
                                                                    <canvas height="34" width="34"></canvas></div>
                                                            </div>
                                                        </div>

                                                        <h2><a href="/tv/65763-new-looney-tunes" title="New Looney Tunes">New Looney Tunes</a></h2>
                                                        <p>Sep 21, 2015</p>
                                                    </div>

                                                    <div className="hover 65763"></div>
                                                </div>

                                                <div className="card style_1">
                                                    <div className="image">
                                                        <div className="wrapper glyphicons_v2 picture grey no_image_holder">
                                                            <a className="image" href="/movie/704239-the-union" title="The Union">
                                                                <img loading="lazy" className="poster w-full" src="https://media.themoviedb.org/t/p/w220_and_h330_face/d9CTnTHip1RbVi2OQbA2LJJQAGI.jpg" srcSet="https://media.themoviedb.org/t/p/w220_and_h330_face/d9CTnTHip1RbVi2OQbA2LJJQAGI.jpg 1x, https://media.themoviedb.org/t/p/w440_and_h660_face/d9CTnTHip1RbVi2OQbA2LJJQAGI.jpg 2x" alt="The Union" />

                                                            </a>
                                                        </div>
                                                        <div className="options" data-id="704239" data-object-id="5ebd87021283e9001ecc9749" data-media-type="movie" data-role="tooltip">
                                                            <a className="no_click" href="#" aria-label="View Item Options"><div className="glyphicons_v2 circle-more white"></div></a>
                                                        </div>
                                                    </div>

                                                    <div className="content">
                                                        <div className="consensus tight">
                                                            <div className="outer_ring">
                                                                <div className="user_score_chart 5ebd87021283e9001ecc9749" data-percent="62" data-track-color="#423d0f" data-bar-color="#d2d531">
                                                                    <div className="percent">
                                                                        <span className="icon icon-r62"></span>
                                                                    </div>
                                                                    <canvas height="34" width="34"></canvas></div>
                                                            </div>
                                                        </div>

                                                        <h2><a href="/movie/704239-the-union" title="The Union">The Union</a></h2>
                                                        <p>Ags 16, 2024</p>
                                                    </div>

                                                    <div className="hover 704239"></div>
                                                </div>

                                                <div className="card style_1">
                                                    <div className="image">
                                                        <div className="wrapper glyphicons_v2 picture grey no_image_holder">
                                                            <a className="image" href="/movie/1008953-incoming" title="Incoming">
                                                                <img loading="lazy" className="poster w-full" src="https://media.themoviedb.org/t/p/w220_and_h330_face/k2ySukuAiAarLns0yttKS3jg85Y.jpg" srcSet="https://media.themoviedb.org/t/p/w220_and_h330_face/k2ySukuAiAarLns0yttKS3jg85Y.jpg 1x, https://media.themoviedb.org/t/p/w440_and_h660_face/k2ySukuAiAarLns0yttKS3jg85Y.jpg 2x" alt="Incoming" />

                                                            </a>
                                                        </div>
                                                        <div className="options" data-id="1008953" data-object-id="62ede184813cb600806cb0db" data-media-type="movie" data-role="tooltip">
                                                            <a className="no_click" href="#" aria-label="View Item Options"><div className="glyphicons_v2 circle-more white"></div></a>
                                                        </div>
                                                    </div>

                                                    <div className="content">
                                                        <div className="consensus tight">
                                                            <div className="outer_ring">
                                                                <div className="user_score_chart 62ede184813cb600806cb0db" data-percent="60" data-track-color="#423d0f" data-bar-color="#d2d531">
                                                                    <div className="percent">
                                                                        <span className="icon icon-r60"></span>
                                                                    </div>
                                                                    <canvas height="34" width="34"></canvas></div>
                                                            </div>
                                                        </div>

                                                        <h2><a href="/movie/1008953-incoming" title="Incoming">Incoming</a></h2>
                                                        <p>Ags 23, 2024</p>
                                                    </div>

                                                    <div className="hover 1008953"></div>
                                                </div>

                                                <div className="card style_1">
                                                    <div className="image">
                                                        <div className="wrapper glyphicons_v2 picture grey no_image_holder">
                                                            <a className="image" href="/tv/8514-rupaul-s-drag-race" title="RuPaul's Drag Race">
                                                                <img loading="lazy" className="poster w-full" src="https://media.themoviedb.org/t/p/w220_and_h330_face/6LThfVcGWSLswQaQh2vvk1Q2IoH.jpg" srcSet="https://media.themoviedb.org/t/p/w220_and_h330_face/6LThfVcGWSLswQaQh2vvk1Q2IoH.jpg 1x, https://media.themoviedb.org/t/p/w440_and_h660_face/6LThfVcGWSLswQaQh2vvk1Q2IoH.jpg 2x" alt="RuPaul's Drag Race" />

                                                            </a>
                                                        </div>
                                                        <div className="options" data-id="8514" data-object-id="52579166760ee36aaa6db767" data-media-type="tv" data-role="tooltip">
                                                            <a className="no_click" href="#" aria-label="View Item Options"><div className="glyphicons_v2 circle-more white"></div></a>
                                                        </div>
                                                    </div>

                                                    <div className="content">
                                                        <div className="consensus tight">
                                                            <div className="outer_ring">
                                                                <div className="user_score_chart 52579166760ee36aaa6db767" data-percent="75" data-track-color="#204529" data-bar-color="#21d07a">
                                                                    <div className="percent">
                                                                        <span className="icon icon-r75"></span>
                                                                    </div>
                                                                    <canvas height="34" width="34"></canvas></div>
                                                            </div>
                                                        </div>

                                                        <h2><a href="/tv/8514-rupaul-s-drag-race" title="RuPaul's Drag Race">RuPaul's Drag Race</a></h2>
                                                        <p>Feb 02, 2009</p>
                                                    </div>

                                                    <div className="hover 8514"></div>
                                                </div>

                                                <div className="card style_1">
                                                    <div className="image">
                                                        <div className="wrapper glyphicons_v2 picture grey no_image_holder">
                                                            <a className="image" href="/tv/57532-paw-patrol" title="PAW Patrol">
                                                                <img loading="lazy" className="poster w-full" src="https://media.themoviedb.org/t/p/w220_and_h330_face/8HXkgUBO5OF8ZK9XbY69RM4S5rv.jpg" srcSet="https://media.themoviedb.org/t/p/w220_and_h330_face/8HXkgUBO5OF8ZK9XbY69RM4S5rv.jpg 1x, https://media.themoviedb.org/t/p/w440_and_h660_face/8HXkgUBO5OF8ZK9XbY69RM4S5rv.jpg 2x" alt="PAW Patrol" />

                                                            </a>
                                                        </div>
                                                        <div className="options" data-id="57532" data-object-id="52598b98760ee34661b30f59" data-media-type="tv" data-role="tooltip">
                                                            <a className="no_click" href="#" aria-label="View Item Options"><div className="glyphicons_v2 circle-more white"></div></a>
                                                        </div>
                                                    </div>

                                                    <div className="content">
                                                        <div className="consensus tight">
                                                            <div className="outer_ring">
                                                                <div className="user_score_chart 52598b98760ee34661b30f59" data-percent="70" data-track-color="#204529" data-bar-color="#21d07a">
                                                                    <div className="percent">
                                                                        <span className="icon icon-r70"></span>
                                                                    </div>
                                                                    <canvas height="34" width="34"></canvas></div>
                                                            </div>
                                                        </div>

                                                        <h2><a href="/tv/57532-paw-patrol" title="PAW Patrol">PAW Patrol</a></h2>
                                                        <p>Ags 12, 2013</p>
                                                    </div>

                                                    <div className="hover 57532"></div>
                                                </div>

                                                <div className="card style_1">
                                                    <div className="image">
                                                        <div className="wrapper glyphicons_v2 picture grey no_image_holder">
                                                            <a className="image" href="/movie/1311550-house-of-ga-a" title="House of Ga'a">
                                                                <img loading="lazy" className="poster w-full" src="https://media.themoviedb.org/t/p/w220_and_h330_face/6yK9hmS641NMwRkR1wWAALWI34t.jpg" srcSet="https://media.themoviedb.org/t/p/w220_and_h330_face/6yK9hmS641NMwRkR1wWAALWI34t.jpg 1x, https://media.themoviedb.org/t/p/w440_and_h660_face/6yK9hmS641NMwRkR1wWAALWI34t.jpg 2x" alt="House of Ga'a" />

                                                            </a>
                                                        </div>
                                                        <div className="options" data-id="1311550" data-object-id="668382dab9b9918aba2bf1ba" data-media-type="movie" data-role="tooltip">
                                                            <a className="no_click" href="#" aria-label="View Item Options"><div className="glyphicons_v2 circle-more white"></div></a>
                                                        </div>
                                                    </div>

                                                    <div className="content">
                                                        <div className="consensus tight">
                                                            <div className="outer_ring">
                                                                <div className="user_score_chart 668382dab9b9918aba2bf1ba" data-percent="60" data-track-color="#423d0f" data-bar-color="#d2d531">
                                                                    <div className="percent">
                                                                        <span className="icon icon-r60"></span>
                                                                    </div>
                                                                    <canvas height="34" width="34"></canvas></div>
                                                            </div>
                                                        </div>

                                                        <h2><a href="/movie/1311550-house-of-ga-a" title="House of Ga'a">House of Ga'a</a></h2>
                                                        <p>Jul 26, 2024</p>
                                                    </div>

                                                    <div className="hover 1311550"></div>
                                                </div>

                                                <div className="card style_1">
                                                    <div className="image">
                                                        <div className="wrapper glyphicons_v2 picture grey no_image_holder">
                                                            <a className="image" href="/tv/60059-better-call-saul" title="Better Call Saul">
                                                                <img loading="lazy" className="poster w-full" src="https://media.themoviedb.org/t/p/w220_and_h330_face/fC2HDm5t0kHl7mTm7jxMR31b7by.jpg" srcSet="https://media.themoviedb.org/t/p/w220_and_h330_face/fC2HDm5t0kHl7mTm7jxMR31b7by.jpg 1x, https://media.themoviedb.org/t/p/w440_and_h660_face/fC2HDm5t0kHl7mTm7jxMR31b7by.jpg 2x" alt="Better Call Saul" />

                                                            </a>
                                                        </div>
                                                        <div className="options" data-id="60059" data-object-id="52599cb3760ee34661b60d83" data-media-type="tv" data-role="tooltip">
                                                            <a className="no_click" href="#" aria-label="View Item Options"><div className="glyphicons_v2 circle-more white"></div></a>
                                                        </div>
                                                    </div>

                                                    <div className="content">
                                                        <div className="consensus tight">
                                                            <div className="outer_ring">
                                                                <div className="user_score_chart 52599cb3760ee34661b60d83" data-percent="87" data-track-color="#204529" data-bar-color="#21d07a">
                                                                    <div className="percent">
                                                                        <span className="icon icon-r87"></span>
                                                                    </div>
                                                                    <canvas height="34" width="34"></canvas></div>
                                                            </div>
                                                        </div>

                                                        <h2><a href="/tv/60059-better-call-saul" title="Better Call Saul">Better Call Saul</a></h2>
                                                        <p>Feb 08, 2015</p>
                                                    </div>

                                                    <div className="hover 60059"></div>
                                                </div>

                                                <div className="card style_1">
                                                    <div className="image">
                                                        <div className="wrapper glyphicons_v2 picture grey no_image_holder">
                                                            <a className="image" href="/movie/762441-a-quiet-place-day-one" title="A Quiet Place: Day One">
                                                                <img loading="lazy" className="poster w-full" src="https://media.themoviedb.org/t/p/w220_and_h330_face/hU42CRk14JuPEdqZG3AWmagiPAP.jpg" srcSet="https://media.themoviedb.org/t/p/w220_and_h330_face/hU42CRk14JuPEdqZG3AWmagiPAP.jpg 1x, https://media.themoviedb.org/t/p/w440_and_h660_face/hU42CRk14JuPEdqZG3AWmagiPAP.jpg 2x" alt="A Quiet Place: Day One" />

                                                            </a>
                                                        </div>
                                                        <div className="options" data-id="762441" data-object-id="5fa997eb34e152003f7c67d1" data-media-type="movie" data-role="tooltip">
                                                            <a className="no_click" href="#" aria-label="View Item Options"><div className="glyphicons_v2 circle-more white"></div></a>
                                                        </div>
                                                    </div>

                                                    <div className="content">
                                                        <div className="consensus tight">
                                                            <div className="outer_ring">
                                                                <div className="user_score_chart 5fa997eb34e152003f7c67d1" data-percent="68" data-track-color="#423d0f" data-bar-color="#d2d531">
                                                                    <div className="percent">
                                                                        <span className="icon icon-r68"></span>
                                                                    </div>
                                                                    <canvas height="34" width="34"></canvas></div>
                                                            </div>
                                                        </div>

                                                        <h2><a href="/movie/762441-a-quiet-place-day-one" title="A Quiet Place: Day One">A Quiet Place: Day One</a></h2>
                                                        <p>Jun 26, 2024</p>
                                                    </div>

                                                    <div className="hover 762441"></div>
                                                </div>

                                                <div className="card style_1">
                                                    <div className="image">
                                                        <div className="wrapper glyphicons_v2 picture grey no_image_holder">
                                                            <a className="image" href="/tv/4087-the-x-files" title="The X-Files">
                                                                <img loading="lazy" className="poster w-full" src="https://media.themoviedb.org/t/p/w220_and_h330_face/5BD0kiTGnDxONqdrsswTewnk6WH.jpg" srcSet="https://media.themoviedb.org/t/p/w220_and_h330_face/5BD0kiTGnDxONqdrsswTewnk6WH.jpg 1x, https://media.themoviedb.org/t/p/w440_and_h660_face/5BD0kiTGnDxONqdrsswTewnk6WH.jpg 2x" alt="The X-Files" />

                                                            </a>
                                                        </div>
                                                        <div className="options" data-id="4087" data-object-id="52575b64760ee36aaa2b6957" data-media-type="tv" data-role="tooltip">
                                                            <a className="no_click" href="#" aria-label="View Item Options"><div className="glyphicons_v2 circle-more white"></div></a>
                                                        </div>
                                                    </div>

                                                    <div className="content">
                                                        <div className="consensus tight">
                                                            <div className="outer_ring">
                                                                <div className="user_score_chart 52575b64760ee36aaa2b6957" data-percent="84" data-track-color="#204529" data-bar-color="#21d07a">
                                                                    <div className="percent">
                                                                        <span className="icon icon-r84"></span>
                                                                    </div>
                                                                    <canvas height="34" width="34"></canvas></div>
                                                            </div>
                                                        </div>

                                                        <h2><a href="/tv/4087-the-x-files" title="The X-Files">The X-Files</a></h2>
                                                        <p>Sep 10, 1993</p>
                                                    </div>

                                                    <div className="hover 4087"></div>
                                                </div>

                                                <div className="card style_1 spacer"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section className="inner_content no_pad">
                            <div className="column_wrapper">
                                <div className="content_wrapper wrap no_bottom_pad">
                                    <div className="column">
                                        <div className="column_header">
                                            <h2>Free To Watch</h2>

                                            <div className="selector_wrap">
                                                <div className="selector">
                                                    <div className="anchor selected">
                                                        <h3 className="leading-5"><a href="#" className="no_click" data-panel="free_scroller" data-group="movie">Movies <span className="glyphicons_v2 chevron-down"></span></a></h3>
                                                        <div className="background"></div>
                                                    </div>

                                                    <div className="anchor">
                                                        <h3 className="leading-5"><a href="#" className="no_click" data-panel="free_scroller" data-group="tv">TV <span className="glyphicons_v2 chevron-down"></span></a></h3>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div id="free_scroller" className="media discover scroller_wrap should_fade is_fading">
                                            <div className="column_content flex scroller loaded">    <div className="card style_1">
                                                <div className="image">
                                                    <div className="wrapper glyphicons_v2 picture grey no_image_holder">
                                                        <a className="image" href="/movie/228150-fury" title="Fury">
                                                            <img loading="lazy" className="poster w-full" src="https://media.themoviedb.org/t/p/w220_and_h330_face/pfte7wdMobMF4CVHuOxyu6oqeeA.jpg" srcSet="https://media.themoviedb.org/t/p/w220_and_h330_face/pfte7wdMobMF4CVHuOxyu6oqeeA.jpg 1x, https://media.themoviedb.org/t/p/w440_and_h660_face/pfte7wdMobMF4CVHuOxyu6oqeeA.jpg 2x" alt="Fury" />

                                                        </a>
                                                    </div>
                                                    <div className="options" data-id="228150" data-object-id="525e5281760ee314f71982b8" data-media-type="movie" data-role="tooltip">
                                                        <a className="no_click" href="#" aria-label="View Item Options"><div className="glyphicons_v2 circle-more white"></div></a>
                                                    </div>
                                                </div>

                                                <div className="content">
                                                    <div className="consensus tight">
                                                        <div className="outer_ring">
                                                            <div className="user_score_chart 525e5281760ee314f71982b8" data-percent="75" data-track-color="#204529" data-bar-color="#21d07a">
                                                                <div className="percent">
                                                                    <span className="icon icon-r75"></span>
                                                                </div>
                                                                <canvas height="34" width="34"></canvas></div>
                                                        </div>
                                                    </div>

                                                    <h2><a href="/movie/228150-fury" title="Fury">Fury</a></h2>
                                                    <p>Nov 11, 2014</p>
                                                </div>

                                                <div className="hover 228150"></div>
                                            </div>

                                                <div className="card style_1">
                                                    <div className="image">
                                                        <div className="wrapper glyphicons_v2 picture grey no_image_holder">
                                                            <a className="image" href="/movie/557-spider-man" title="Spider-Man">
                                                                <img loading="lazy" className="poster w-full" src="https://media.themoviedb.org/t/p/w220_and_h330_face/gh4cZbhZxyTbgxQPxD0dOudNPTn.jpg" srcSet="https://media.themoviedb.org/t/p/w220_and_h330_face/gh4cZbhZxyTbgxQPxD0dOudNPTn.jpg 1x, https://media.themoviedb.org/t/p/w440_and_h660_face/gh4cZbhZxyTbgxQPxD0dOudNPTn.jpg 2x" alt="Spider-Man" />

                                                            </a>
                                                        </div>
                                                        <div className="options" data-id="557" data-object-id="4bc88fd8017a3c122d00947a" data-media-type="movie" data-role="tooltip">
                                                            <a className="no_click" href="#" aria-label="View Item Options"><div className="glyphicons_v2 circle-more white"></div></a>
                                                        </div>
                                                    </div>

                                                    <div className="content">
                                                        <div className="consensus tight">
                                                            <div className="outer_ring">
                                                                <div className="user_score_chart 4bc88fd8017a3c122d00947a" data-percent="73" data-track-color="#204529" data-bar-color="#21d07a">
                                                                    <div className="percent">
                                                                        <span className="icon icon-r73"></span>
                                                                    </div>
                                                                    <canvas height="34" width="34"></canvas></div>
                                                            </div>
                                                        </div>

                                                        <h2><a href="/movie/557-spider-man" title="Spider-Man">Spider-Man</a></h2>
                                                        <p>Mei 22, 2002</p>
                                                    </div>

                                                    <div className="hover 557"></div>
                                                </div>

                                                <div className="card style_1">
                                                    <div className="image">
                                                        <div className="wrapper glyphicons_v2 picture grey no_image_holder">
                                                            <a className="image" href="/movie/693134-dune-part-two" title="Dune: Part Two">
                                                                <img loading="lazy" className="poster w-full" src="https://media.themoviedb.org/t/p/w220_and_h330_face/uOYAbN3F5n3ne8TzWjzVEvQ7XGX.jpg" srcSet="https://media.themoviedb.org/t/p/w220_and_h330_face/uOYAbN3F5n3ne8TzWjzVEvQ7XGX.jpg 1x, https://media.themoviedb.org/t/p/w440_and_h660_face/uOYAbN3F5n3ne8TzWjzVEvQ7XGX.jpg 2x" alt="Dune: Part Two" />

                                                            </a>
                                                        </div>
                                                        <div className="options" data-id="693134" data-object-id="5e959bc3db72c00014ad69d6" data-media-type="movie" data-role="tooltip">
                                                            <a className="no_click" href="#" aria-label="View Item Options"><div className="glyphicons_v2 circle-more white"></div></a>
                                                        </div>
                                                    </div>

                                                    <div className="content">
                                                        <div className="consensus tight">
                                                            <div className="outer_ring">
                                                                <div className="user_score_chart 5e959bc3db72c00014ad69d6" data-percent="82" data-track-color="#204529" data-bar-color="#21d07a">
                                                                    <div className="percent">
                                                                        <span className="icon icon-r82"></span>
                                                                    </div>
                                                                    <canvas height="34" width="34"></canvas></div>
                                                            </div>
                                                        </div>

                                                        <h2><a href="/movie/693134-dune-part-two" title="Dune: Part Two">Dune: Part Two</a></h2>
                                                        <p>Feb 28, 2024</p>
                                                    </div>

                                                    <div className="hover 693134"></div>
                                                </div>

                                                <div className="card style_1">
                                                    <div className="image">
                                                        <div className="wrapper glyphicons_v2 picture grey no_image_holder">
                                                            <a className="image" href="/movie/131631-the-hunger-games-mockingjay-part-1" title="The Hunger Games: Mockingjay - Part 1">
                                                                <img loading="lazy" className="poster w-full" src="https://media.themoviedb.org/t/p/w220_and_h330_face/4FAA18ZIja70d1Tu5hr5cj2q1sB.jpg" srcSet="https://media.themoviedb.org/t/p/w220_and_h330_face/4FAA18ZIja70d1Tu5hr5cj2q1sB.jpg 1x, https://media.themoviedb.org/t/p/w440_and_h660_face/4FAA18ZIja70d1Tu5hr5cj2q1sB.jpg 2x" alt="The Hunger Games: Mockingjay - Part 1" />

                                                            </a>
                                                        </div>
                                                        <div className="options" data-id="131631" data-object-id="504e434219c2956fdd00001c" data-media-type="movie" data-role="tooltip">
                                                            <a className="no_click" href="#" aria-label="View Item Options"><div className="glyphicons_v2 circle-more white"></div></a>
                                                        </div>
                                                    </div>

                                                    <div className="content">
                                                        <div className="consensus tight">
                                                            <div className="outer_ring">
                                                                <div className="user_score_chart 504e434219c2956fdd00001c" data-percent="68" data-track-color="#423d0f" data-bar-color="#d2d531">
                                                                    <div className="percent">
                                                                        <span className="icon icon-r68"></span>
                                                                    </div>
                                                                    <canvas height="34" width="34"></canvas></div>
                                                            </div>
                                                        </div>

                                                        <h2><a href="/movie/131631-the-hunger-games-mockingjay-part-1" title="The Hunger Games: Mockingjay - Part 1">The Hunger Games: Mockingjay - Part 1</a></h2>
                                                        <p>Nov 19, 2014</p>
                                                    </div>

                                                    <div className="hover 131631"></div>
                                                </div>

                                                <div className="card style_1">
                                                    <div className="image">
                                                        <div className="wrapper glyphicons_v2 picture grey no_image_holder">
                                                            <a className="image" href="/movie/429617-spider-man-far-from-home" title="Spider-Man: Far From Home">
                                                                <img loading="lazy" className="poster w-full" src="https://media.themoviedb.org/t/p/w220_and_h330_face/4q2NNj4S5dG2RLF9CpXsej7yXl.jpg" srcSet="https://media.themoviedb.org/t/p/w220_and_h330_face/4q2NNj4S5dG2RLF9CpXsej7yXl.jpg 1x, https://media.themoviedb.org/t/p/w440_and_h660_face/4q2NNj4S5dG2RLF9CpXsej7yXl.jpg 2x" alt="Spider-Man: Far From Home" />

                                                            </a>
                                                        </div>
                                                        <div className="options" data-id="429617" data-object-id="584bd017c3a368397200969e" data-media-type="movie" data-role="tooltip">
                                                            <a className="no_click" href="#" aria-label="View Item Options"><div className="glyphicons_v2 circle-more white"></div></a>
                                                        </div>
                                                    </div>

                                                    <div className="content">
                                                        <div className="consensus tight">
                                                            <div className="outer_ring">
                                                                <div className="user_score_chart 584bd017c3a368397200969e" data-percent="74" data-track-color="#204529" data-bar-color="#21d07a">
                                                                    <div className="percent">
                                                                        <span className="icon icon-r74"></span>
                                                                    </div>
                                                                    <canvas height="34" width="34"></canvas></div>
                                                            </div>
                                                        </div>

                                                        <h2><a href="/movie/429617-spider-man-far-from-home" title="Spider-Man: Far From Home">Spider-Man: Far From Home</a></h2>
                                                        <p>Jul 03, 2019</p>
                                                    </div>

                                                    <div className="hover 429617"></div>
                                                </div>

                                                <div className="card style_1">
                                                    <div className="image">
                                                        <div className="wrapper glyphicons_v2 picture grey no_image_holder">
                                                            <a className="image" href="/movie/38700-bad-boys-for-life" title="Bad Boys for Life">
                                                                <img loading="lazy" className="poster w-full" src="https://media.themoviedb.org/t/p/w220_and_h330_face/y95lQLnuNKdPAzw9F9Ab8kJ80c3.jpg" srcSet="https://media.themoviedb.org/t/p/w220_and_h330_face/y95lQLnuNKdPAzw9F9Ab8kJ80c3.jpg 1x, https://media.themoviedb.org/t/p/w440_and_h660_face/y95lQLnuNKdPAzw9F9Ab8kJ80c3.jpg 2x" alt="Bad Boys for Life" />

                                                            </a>
                                                        </div>
                                                        <div className="options" data-id="38700" data-object-id="4c052f25017a3c7e8f0002e9" data-media-type="movie" data-role="tooltip">
                                                            <a className="no_click" href="#" aria-label="View Item Options"><div className="glyphicons_v2 circle-more white"></div></a>
                                                        </div>
                                                    </div>

                                                    <div className="content">
                                                        <div className="consensus tight">
                                                            <div className="outer_ring">
                                                                <div className="user_score_chart 4c052f25017a3c7e8f0002e9" data-percent="71" data-track-color="#204529" data-bar-color="#21d07a">
                                                                    <div className="percent">
                                                                        <span className="icon icon-r71"></span>
                                                                    </div>
                                                                    <canvas height="34" width="34"></canvas></div>
                                                            </div>
                                                        </div>

                                                        <h2><a href="/movie/38700-bad-boys-for-life" title="Bad Boys for Life">Bad Boys for Life</a></h2>
                                                        <p>Jan 22, 2020</p>
                                                    </div>

                                                    <div className="hover 38700"></div>
                                                </div>

                                                <div className="card style_1">
                                                    <div className="image">
                                                        <div className="wrapper glyphicons_v2 picture grey no_image_holder">
                                                            <a className="image" href="/movie/1179558-15-cameras" title="15 Cameras">
                                                                <img loading="lazy" className="poster w-full" src="https://media.themoviedb.org/t/p/w220_and_h330_face/muQrASlFPg4Hx0BEDwXjUsBMSHM.jpg" srcSet="https://media.themoviedb.org/t/p/w220_and_h330_face/muQrASlFPg4Hx0BEDwXjUsBMSHM.jpg 1x, https://media.themoviedb.org/t/p/w440_and_h660_face/muQrASlFPg4Hx0BEDwXjUsBMSHM.jpg 2x" alt="15 Cameras" />

                                                            </a>
                                                        </div>
                                                        <div className="options" data-id="1179558" data-object-id="6505ff675aadc4011e65158c" data-media-type="movie" data-role="tooltip">
                                                            <a className="no_click" href="#" aria-label="View Item Options"><div className="glyphicons_v2 circle-more white"></div></a>
                                                        </div>
                                                    </div>

                                                    <div className="content">
                                                        <div className="consensus tight">
                                                            <div className="outer_ring">
                                                                <div className="user_score_chart 6505ff675aadc4011e65158c" data-percent="61" data-track-color="#423d0f" data-bar-color="#d2d531">
                                                                    <div className="percent">
                                                                        <span className="icon icon-r61"></span>
                                                                    </div>
                                                                    <canvas height="34" width="34"></canvas></div>
                                                            </div>
                                                        </div>

                                                        <h2><a href="/movie/1179558-15-cameras" title="15 Cameras">15 Cameras</a></h2>
                                                        <p>Okt 13, 2023</p>
                                                    </div>

                                                    <div className="hover 1179558"></div>
                                                </div>

                                                <div className="card style_1">
                                                    <div className="image">
                                                        <div className="wrapper glyphicons_v2 picture grey no_image_holder">
                                                            <a className="image" href="/movie/91314-transformers-age-of-extinction" title="Transformers: Age of Extinction">
                                                                <img loading="lazy" className="poster w-full" src="https://media.themoviedb.org/t/p/w220_and_h330_face/oEzPm6RFjGxkfpP4BTj7jaSTqvu.jpg" srcSet="https://media.themoviedb.org/t/p/w220_and_h330_face/oEzPm6RFjGxkfpP4BTj7jaSTqvu.jpg 1x, https://media.themoviedb.org/t/p/w440_and_h660_face/oEzPm6RFjGxkfpP4BTj7jaSTqvu.jpg 2x" alt="Transformers: Age of Extinction" />

                                                            </a>
                                                        </div>
                                                        <div className="options" data-id="91314" data-object-id="4f463706760ee30831000bd8" data-media-type="movie" data-role="tooltip">
                                                            <a className="no_click" href="#" aria-label="View Item Options"><div className="glyphicons_v2 circle-more white"></div></a>
                                                        </div>
                                                    </div>

                                                    <div className="content">
                                                        <div className="consensus tight">
                                                            <div className="outer_ring">
                                                                <div className="user_score_chart 4f463706760ee30831000bd8" data-percent="59" data-track-color="#423d0f" data-bar-color="#d2d531">
                                                                    <div className="percent">
                                                                        <span className="icon icon-r59"></span>
                                                                    </div>
                                                                    <canvas height="34" width="34"></canvas></div>
                                                            </div>
                                                        </div>

                                                        <h2><a href="/movie/91314-transformers-age-of-extinction" title="Transformers: Age of Extinction">Transformers: Age of Extinction</a></h2>
                                                        <p>Jun 25, 2014</p>
                                                    </div>

                                                    <div className="hover 91314"></div>
                                                </div>

                                                <div className="card style_1">
                                                    <div className="image">
                                                        <div className="wrapper glyphicons_v2 picture grey no_image_holder">
                                                            <a className="image" href="/movie/315635-spider-man-homecoming" title="Spider-Man: Homecoming">
                                                                <img loading="lazy" className="poster w-full" src="https://media.themoviedb.org/t/p/w220_and_h330_face/c24sv2weTHPsmDa7jEMN0m2P3RT.jpg" srcSet="https://media.themoviedb.org/t/p/w220_and_h330_face/c24sv2weTHPsmDa7jEMN0m2P3RT.jpg 1x, https://media.themoviedb.org/t/p/w440_and_h660_face/c24sv2weTHPsmDa7jEMN0m2P3RT.jpg 2x" alt="Spider-Man: Homecoming" />

                                                            </a>
                                                        </div>
                                                        <div className="options" data-id="315635" data-object-id="54a9ab849251414d5b005173" data-media-type="movie" data-role="tooltip">
                                                            <a className="no_click" href="#" aria-label="View Item Options"><div className="glyphicons_v2 circle-more white"></div></a>
                                                        </div>
                                                    </div>

                                                    <div className="content">
                                                        <div className="consensus tight">
                                                            <div className="outer_ring">
                                                                <div className="user_score_chart 54a9ab849251414d5b005173" data-percent="73" data-track-color="#204529" data-bar-color="#21d07a">
                                                                    <div className="percent">
                                                                        <span className="icon icon-r73"></span>
                                                                    </div>
                                                                    <canvas height="34" width="34"></canvas></div>
                                                            </div>
                                                        </div>

                                                        <h2><a href="/movie/315635-spider-man-homecoming" title="Spider-Man: Homecoming">Spider-Man: Homecoming</a></h2>
                                                        <p>Jul 05, 2017</p>
                                                    </div>

                                                    <div className="hover 315635"></div>
                                                </div>

                                                <div className="card style_1">
                                                    <div className="image">
                                                        <div className="wrapper glyphicons_v2 picture grey no_image_holder">
                                                            <a className="image" href="/movie/955555-3" title="The Roundup: No Way Out">
                                                                <img loading="lazy" className="poster w-full" src="https://media.themoviedb.org/t/p/w220_and_h330_face/lW6IHrtaATxDKYVYoQGU5sh0OVm.jpg" srcSet="https://media.themoviedb.org/t/p/w220_and_h330_face/lW6IHrtaATxDKYVYoQGU5sh0OVm.jpg 1x, https://media.themoviedb.org/t/p/w440_and_h660_face/lW6IHrtaATxDKYVYoQGU5sh0OVm.jpg 2x" alt="The Roundup: No Way Out" />

                                                            </a>
                                                        </div>
                                                        <div className="options" data-id="955555" data-object-id="6241d00caf4324008e0b9cfd" data-media-type="movie" data-role="tooltip">
                                                            <a className="no_click" href="#" aria-label="View Item Options"><div className="glyphicons_v2 circle-more white"></div></a>
                                                        </div>
                                                    </div>

                                                    <div className="content">
                                                        <div className="consensus tight">
                                                            <div className="outer_ring">
                                                                <div className="user_score_chart 6241d00caf4324008e0b9cfd" data-percent="73" data-track-color="#204529" data-bar-color="#21d07a">
                                                                    <div className="percent">
                                                                        <span className="icon icon-r73"></span>
                                                                    </div>
                                                                    <canvas height="34" width="34"></canvas></div>
                                                            </div>
                                                        </div>

                                                        <h2><a href="/movie/955555-3" title="The Roundup: No Way Out">The Roundup: No Way Out</a></h2>
                                                        <p>Jun 07, 2023</p>
                                                    </div>

                                                    <div className="hover 955555"></div>
                                                </div>

                                                <div className="card style_1">
                                                    <div className="image">
                                                        <div className="wrapper glyphicons_v2 picture grey no_image_holder">
                                                            <a className="image" href="/movie/324552-john-wick-chapter-2" title="John Wick: Chapter 2">
                                                                <img loading="lazy" className="poster w-full" src="https://media.themoviedb.org/t/p/w220_and_h330_face/hXWBc0ioZP3cN4zCu6SN3YHXZVO.jpg" srcSet="https://media.themoviedb.org/t/p/w220_and_h330_face/hXWBc0ioZP3cN4zCu6SN3YHXZVO.jpg 1x, https://media.themoviedb.org/t/p/w440_and_h660_face/hXWBc0ioZP3cN4zCu6SN3YHXZVO.jpg 2x" alt="John Wick: Chapter 2" />

                                                            </a>
                                                        </div>
                                                        <div className="options" data-id="324552" data-object-id="54d912bec3a3687ab9000158" data-media-type="movie" data-role="tooltip">
                                                            <a className="no_click" href="#" aria-label="View Item Options"><div className="glyphicons_v2 circle-more white"></div></a>
                                                        </div>
                                                    </div>

                                                    <div className="content">
                                                        <div className="consensus tight">
                                                            <div className="outer_ring">
                                                                <div className="user_score_chart 54d912bec3a3687ab9000158" data-percent="73" data-track-color="#204529" data-bar-color="#21d07a">
                                                                    <div className="percent">
                                                                        <span className="icon icon-r73"></span>
                                                                    </div>
                                                                    <canvas height="34" width="34"></canvas></div>
                                                            </div>
                                                        </div>

                                                        <h2><a href="/movie/324552-john-wick-chapter-2" title="John Wick: Chapter 2">John Wick: Chapter 2</a></h2>
                                                        <p>Feb 08, 2017</p>
                                                    </div>

                                                    <div className="hover 324552"></div>
                                                </div>

                                                <div className="card style_1">
                                                    <div className="image">
                                                        <div className="wrapper glyphicons_v2 picture grey no_image_holder">
                                                            <a className="image" href="/movie/10192-shrek-forever-after" title="Shrek Forever After">
                                                                <img loading="lazy" className="poster w-full" src="https://media.themoviedb.org/t/p/w220_and_h330_face/6HrfPZtKcGmX2tUWW3cnciZTaSD.jpg" srcSet="https://media.themoviedb.org/t/p/w220_and_h330_face/6HrfPZtKcGmX2tUWW3cnciZTaSD.jpg 1x, https://media.themoviedb.org/t/p/w440_and_h660_face/6HrfPZtKcGmX2tUWW3cnciZTaSD.jpg 2x" alt="Shrek Forever After" />

                                                            </a>
                                                        </div>
                                                        <div className="options" data-id="10192" data-object-id="4bc8ac2c017a3c122d04ee8e" data-media-type="movie" data-role="tooltip">
                                                            <a className="no_click" href="#" aria-label="View Item Options"><div className="glyphicons_v2 circle-more white"></div></a>
                                                        </div>
                                                    </div>

                                                    <div className="content">
                                                        <div className="consensus tight">
                                                            <div className="outer_ring">
                                                                <div className="user_score_chart 4bc8ac2c017a3c122d04ee8e" data-percent="64" data-track-color="#423d0f" data-bar-color="#d2d531">
                                                                    <div className="percent">
                                                                        <span className="icon icon-r64"></span>
                                                                    </div>
                                                                    <canvas height="34" width="34"></canvas></div>
                                                            </div>
                                                        </div>

                                                        <h2><a href="/movie/10192-shrek-forever-after" title="Shrek Forever After">Shrek Forever After</a></h2>
                                                        <p>Mei 16, 2010</p>
                                                    </div>

                                                    <div className="hover 10192"></div>
                                                </div>

                                                <div className="card style_1">
                                                    <div className="image">
                                                        <div className="wrapper glyphicons_v2 picture grey no_image_holder">
                                                            <a className="image" href="/movie/156022-the-equalizer" title="The Equalizer">
                                                                <img loading="lazy" className="poster w-full" src="https://media.themoviedb.org/t/p/w220_and_h330_face/9u4yW7yPA0BQ2pv9XwiNzItwvp8.jpg" srcSet="https://media.themoviedb.org/t/p/w220_and_h330_face/9u4yW7yPA0BQ2pv9XwiNzItwvp8.jpg 1x, https://media.themoviedb.org/t/p/w440_and_h660_face/9u4yW7yPA0BQ2pv9XwiNzItwvp8.jpg 2x" alt="The Equalizer" />

                                                            </a>
                                                        </div>
                                                        <div className="options" data-id="156022" data-object-id="50e9f941760ee3238750a780" data-media-type="movie" data-role="tooltip">
                                                            <a className="no_click" href="#" aria-label="View Item Options"><div className="glyphicons_v2 circle-more white"></div></a>
                                                        </div>
                                                    </div>

                                                    <div className="content">
                                                        <div className="consensus tight">
                                                            <div className="outer_ring">
                                                                <div className="user_score_chart 50e9f941760ee3238750a780" data-percent="73" data-track-color="#204529" data-bar-color="#21d07a">
                                                                    <div className="percent">
                                                                        <span className="icon icon-r73"></span>
                                                                    </div>
                                                                    <canvas height="34" width="34"></canvas></div>
                                                            </div>
                                                        </div>

                                                        <h2><a href="/movie/156022-the-equalizer" title="The Equalizer">The Equalizer</a></h2>
                                                        <p>Sep 24, 2014</p>
                                                    </div>

                                                    <div className="hover 156022"></div>
                                                </div>

                                                <div className="card style_1">
                                                    <div className="image">
                                                        <div className="wrapper glyphicons_v2 picture grey no_image_holder">
                                                            <a className="image" href="/movie/335983-venom" title="Venom">
                                                                <img loading="lazy" className="poster w-full" src="https://media.themoviedb.org/t/p/w220_and_h330_face/2uNW4WbgBXL25BAbXGLnLqX71Sw.jpg" srcSet="https://media.themoviedb.org/t/p/w220_and_h330_face/2uNW4WbgBXL25BAbXGLnLqX71Sw.jpg 1x, https://media.themoviedb.org/t/p/w440_and_h660_face/2uNW4WbgBXL25BAbXGLnLqX71Sw.jpg 2x" alt="Venom" />

                                                            </a>
                                                        </div>
                                                        <div className="options" data-id="335983" data-object-id="552f0466c3a3685951000ba5" data-media-type="movie" data-role="tooltip">
                                                            <a className="no_click" href="#" aria-label="View Item Options"><div className="glyphicons_v2 circle-more white"></div></a>
                                                        </div>
                                                    </div>

                                                    <div className="content">
                                                        <div className="consensus tight">
                                                            <div className="outer_ring">
                                                                <div className="user_score_chart 552f0466c3a3685951000ba5" data-percent="68" data-track-color="#423d0f" data-bar-color="#d2d531">
                                                                    <div className="percent">
                                                                        <span className="icon icon-r68"></span>
                                                                    </div>
                                                                    <canvas height="34" width="34"></canvas></div>
                                                            </div>
                                                        </div>

                                                        <h2><a href="/movie/335983-venom" title="Venom">Venom</a></h2>
                                                        <p>Okt 03, 2018</p>
                                                    </div>

                                                    <div className="hover 335983"></div>
                                                </div>

                                                <div className="card style_1">
                                                    <div className="image">
                                                        <div className="wrapper glyphicons_v2 picture grey no_image_holder">
                                                            <a className="image" href="/movie/345887-the-equalizer-2" title="The Equalizer 2">
                                                                <img loading="lazy" className="poster w-full" src="https://media.themoviedb.org/t/p/w220_and_h330_face/cQvc9N6JiMVKqol3wcYrGshsIdZ.jpg" srcSet="https://media.themoviedb.org/t/p/w220_and_h330_face/cQvc9N6JiMVKqol3wcYrGshsIdZ.jpg 1x, https://media.themoviedb.org/t/p/w440_and_h660_face/cQvc9N6JiMVKqol3wcYrGshsIdZ.jpg 2x" alt="The Equalizer 2" />

                                                            </a>
                                                        </div>
                                                        <div className="options" data-id="345887" data-object-id="5588a3759251412eb200043b" data-media-type="movie" data-role="tooltip">
                                                            <a className="no_click" href="#" aria-label="View Item Options"><div className="glyphicons_v2 circle-more white"></div></a>
                                                        </div>
                                                    </div>

                                                    <div className="content">
                                                        <div className="consensus tight">
                                                            <div className="outer_ring">
                                                                <div className="user_score_chart 5588a3759251412eb200043b" data-percent="68" data-track-color="#423d0f" data-bar-color="#d2d531">
                                                                    <div className="percent">
                                                                        <span className="icon icon-r68"></span>
                                                                    </div>
                                                                    <canvas height="34" width="34"></canvas></div>
                                                            </div>
                                                        </div>

                                                        <h2><a href="/movie/345887-the-equalizer-2" title="The Equalizer 2">The Equalizer 2</a></h2>
                                                        <p>Ags 30, 2018</p>
                                                    </div>

                                                    <div className="hover 345887"></div>
                                                </div>

                                                <div className="card style_1">
                                                    <div className="image">
                                                        <div className="wrapper glyphicons_v2 picture grey no_image_holder">
                                                            <a className="image" href="/movie/38575-the-karate-kid" title="The Karate Kid">
                                                                <img loading="lazy" className="poster w-full" src="https://media.themoviedb.org/t/p/w220_and_h330_face/bHjLC5GuBfeyW6ZE07x6TalKj19.jpg" srcSet="https://media.themoviedb.org/t/p/w220_and_h330_face/bHjLC5GuBfeyW6ZE07x6TalKj19.jpg 1x, https://media.themoviedb.org/t/p/w440_and_h660_face/bHjLC5GuBfeyW6ZE07x6TalKj19.jpg 2x" alt="The Karate Kid" />

                                                            </a>
                                                        </div>
                                                        <div className="options" data-id="38575" data-object-id="4c01efe2017a3c7031001319" data-media-type="movie" data-role="tooltip">
                                                            <a className="no_click" href="#" aria-label="View Item Options"><div className="glyphicons_v2 circle-more white"></div></a>
                                                        </div>
                                                    </div>

                                                    <div className="content">
                                                        <div className="consensus tight">
                                                            <div className="outer_ring">
                                                                <div className="user_score_chart 4c01efe2017a3c7031001319" data-percent="65" data-track-color="#423d0f" data-bar-color="#d2d531">
                                                                    <div className="percent">
                                                                        <span className="icon icon-r65"></span>
                                                                    </div>
                                                                    <canvas height="34" width="34"></canvas></div>
                                                            </div>
                                                        </div>

                                                        <h2><a href="/movie/38575-the-karate-kid" title="The Karate Kid">The Karate Kid</a></h2>
                                                        <p>Jun 10, 2010</p>
                                                    </div>

                                                    <div className="hover 38575"></div>
                                                </div>

                                                <div className="card style_1">
                                                    <div className="image">
                                                        <div className="wrapper glyphicons_v2 picture grey no_image_holder">
                                                            <a className="image" href="/movie/324786-hacksaw-ridge" title="Hacksaw Ridge">
                                                                <img loading="lazy" className="poster w-full" src="https://media.themoviedb.org/t/p/w220_and_h330_face/wuz8TjCIWR2EVVMuEfBnQ1vuGS3.jpg" srcSet="https://media.themoviedb.org/t/p/w220_and_h330_face/wuz8TjCIWR2EVVMuEfBnQ1vuGS3.jpg 1x, https://media.themoviedb.org/t/p/w440_and_h660_face/wuz8TjCIWR2EVVMuEfBnQ1vuGS3.jpg 2x" alt="Hacksaw Ridge" />

                                                            </a>
                                                        </div>
                                                        <div className="options" data-id="324786" data-object-id="54da90a89251416195000489" data-media-type="movie" data-role="tooltip">
                                                            <a className="no_click" href="#" aria-label="View Item Options"><div className="glyphicons_v2 circle-more white"></div></a>
                                                        </div>
                                                    </div>

                                                    <div className="content">
                                                        <div className="consensus tight">
                                                            <div className="outer_ring">
                                                                <div className="user_score_chart 54da90a89251416195000489" data-percent="82" data-track-color="#204529" data-bar-color="#21d07a">
                                                                    <div className="percent">
                                                                        <span className="icon icon-r82"></span>
                                                                    </div>
                                                                    <canvas height="34" width="34"></canvas></div>
                                                            </div>
                                                        </div>

                                                        <h2><a href="/movie/324786-hacksaw-ridge" title="Hacksaw Ridge">Hacksaw Ridge</a></h2>
                                                        <p>Nov 04, 2016</p>
                                                    </div>

                                                    <div className="hover 324786"></div>
                                                </div>

                                                <div className="card style_1">
                                                    <div className="image">
                                                        <div className="wrapper glyphicons_v2 picture grey no_image_holder">
                                                            <a className="image" href="/movie/216015-fifty-shades-of-grey" title="Fifty Shades of Grey">
                                                                <img loading="lazy" className="poster w-full" src="https://media.themoviedb.org/t/p/w220_and_h330_face/63kGofUkt1Mx0SIL4XI4Z5AoSgt.jpg" srcSet="https://media.themoviedb.org/t/p/w220_and_h330_face/63kGofUkt1Mx0SIL4XI4Z5AoSgt.jpg 1x, https://media.themoviedb.org/t/p/w440_and_h660_face/63kGofUkt1Mx0SIL4XI4Z5AoSgt.jpg 2x" alt="Fifty Shades of Grey" />

                                                            </a>
                                                        </div>
                                                        <div className="options" data-id="216015" data-object-id="52152fa0760ee32de42dea39" data-media-type="movie" data-role="tooltip">
                                                            <a className="no_click" href="#" aria-label="View Item Options"><div className="glyphicons_v2 circle-more white"></div></a>
                                                        </div>
                                                    </div>

                                                    <div className="content">
                                                        <div className="consensus tight">
                                                            <div className="outer_ring">
                                                                <div className="user_score_chart 52152fa0760ee32de42dea39" data-percent="59" data-track-color="#423d0f" data-bar-color="#d2d531">
                                                                    <div className="percent">
                                                                        <span className="icon icon-r59"></span>
                                                                    </div>
                                                                    <canvas height="34" width="34"></canvas></div>
                                                            </div>
                                                        </div>

                                                        <h2><a href="/movie/216015-fifty-shades-of-grey" title="Fifty Shades of Grey">Fifty Shades of Grey</a></h2>
                                                        <p>Feb 11, 2015</p>
                                                    </div>

                                                    <div className="hover 216015"></div>
                                                </div>

                                                <div className="card style_1">
                                                    <div className="image">
                                                        <div className="wrapper glyphicons_v2 picture grey no_image_holder">
                                                            <a className="image" href="/movie/496243" title="Parasite">
                                                                <img loading="lazy" className="poster w-full" src="https://media.themoviedb.org/t/p/w220_and_h330_face/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg" srcSet="https://media.themoviedb.org/t/p/w220_and_h330_face/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg 1x, https://media.themoviedb.org/t/p/w440_and_h660_face/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg 2x" alt="Parasite" />

                                                            </a>
                                                        </div>
                                                        <div className="options" data-id="496243" data-object-id="5a4db2bd0e0a26481d0042b8" data-media-type="movie" data-role="tooltip">
                                                            <a className="no_click" href="#" aria-label="View Item Options"><div className="glyphicons_v2 circle-more white"></div></a>
                                                        </div>
                                                    </div>

                                                    <div className="content">
                                                        <div className="consensus tight">
                                                            <div className="outer_ring">
                                                                <div className="user_score_chart 5a4db2bd0e0a26481d0042b8" data-percent="85" data-track-color="#204529" data-bar-color="#21d07a">
                                                                    <div className="percent">
                                                                        <span className="icon icon-r85"></span>
                                                                    </div>
                                                                    <canvas height="34" width="34"></canvas></div>
                                                            </div>
                                                        </div>

                                                        <h2><a href="/movie/496243" title="Parasite">Parasite</a></h2>
                                                        <p>Jun 24, 2019</p>
                                                    </div>

                                                    <div className="hover 496243"></div>
                                                </div>

                                                <div className="card style_1">
                                                    <div className="image">
                                                        <div className="wrapper glyphicons_v2 picture grey no_image_holder">
                                                            <a className="image" href="/movie/948-halloween" title="Halloween">
                                                                <img loading="lazy" className="poster w-full" src="https://media.themoviedb.org/t/p/w220_and_h330_face/wijlZ3HaYMvlDTPqJoTCWKFkCPU.jpg" srcSet="https://media.themoviedb.org/t/p/w220_and_h330_face/wijlZ3HaYMvlDTPqJoTCWKFkCPU.jpg 1x, https://media.themoviedb.org/t/p/w440_and_h660_face/wijlZ3HaYMvlDTPqJoTCWKFkCPU.jpg 2x" alt="Halloween" />

                                                            </a>
                                                        </div>
                                                        <div className="options" data-id="948" data-object-id="4bc8940b017a3c122d01143f" data-media-type="movie" data-role="tooltip">
                                                            <a className="no_click" href="#" aria-label="View Item Options"><div className="glyphicons_v2 circle-more white"></div></a>
                                                        </div>
                                                    </div>

                                                    <div className="content">
                                                        <div className="consensus tight">
                                                            <div className="outer_ring">
                                                                <div className="user_score_chart 4bc8940b017a3c122d01143f" data-percent="76" data-track-color="#204529" data-bar-color="#21d07a">
                                                                    <div className="percent">
                                                                        <span className="icon icon-r76"></span>
                                                                    </div>
                                                                    <canvas height="34" width="34"></canvas></div>
                                                            </div>
                                                        </div>

                                                        <h2><a href="/movie/948-halloween" title="Halloween">Halloween</a></h2>
                                                        <p>Okt 24, 1978</p>
                                                    </div>

                                                    <div className="hover 948"></div>
                                                </div>

                                                <div className="card style_1 spacer"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section className="inner_content bg_image community">
                            <div className="column_wrapper">
                                <div className="content_wrapper wrap">

                                    <div className="column">
                                        <div className="column_header">
                                            <h2>Join Today</h2>
                                        </div>

                                        <div className="column_content flex">
                                            <div className="column">
                                                <p>Get access to maintain your own <em>custom personal lists</em>, <em>track what you've seen</em> and search and filter for <em>what to watch next</em>—regardless if it's in theatres, on TV or available on popular streaming services like Netflix, iflix, Hotstar, Viu, and Catchplay.</p>
                                                <p className="button"><a href="/signup" className="rounded background_color border_color purple">Sign Up</a></p>
                                            </div>

                                            <div className="column">
                                                <ul>
                                                    <li>Enjoy TMDB ad free</li>
                                                    <li>Maintain a personal watchlist</li>
                                                    <li>Filter by your subscribed streaming services and find something to watch</li>
                                                    <li>Log the movies and TV shows you've seen</li>
                                                    <li>Build custom lists</li>
                                                    <li>Contribute to and improve our database</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section className="inner_content leaderboard">
                            <div className="column_wrapper">
                                <div className="content_wrapper wrap">

                                    <div className="column">
                                        <div className="column_header">
                                            <h2>Leaderboard</h2>
                                            <div>
                                                <p><span className="dot all"></span> All Time Edits</p>
                                                <p><span className="dot this_week"></span> Edits This Week</p>
                                            </div>
                                        </div>

                                        <div className="column_content">
                                            <ol className="leaderboard">
                                                <li>
                                                    <span className="avatar">
                                                        <a href="/u/Samara">
                                                            <span className="round initials background_color blue">S</span>
                                                        </a>
                                                    </span>

                                                    <div className="data">
                                                        <h3><a href="/u/Samara">Samara</a></h3>
                                                        <div className="meter all">
                                                            <div className="gauge" style={{ width: '100.0%' }}></div>
                                                            <h4 className="font-bold">3,653,929</h4>
                                                        </div>
                                                        <div className="meter this_week">
                                                            <div className="gauge" style={{ width: '100.0%' }}></div>
                                                            <h4 className="font-bold">16,456</h4>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <span className="avatar">
                                                        <a href="/u/Sheigutn">
                                                            <img loading="lazy" className="avatar" src="https://media.themoviedb.org/t/p/w64_and_h64_face/5BvxGhRE7yjtbHCXgrTxPk9hBXp.jpg" srcSet="https://media.themoviedb.org/t/p/w64_and_h64_face/5BvxGhRE7yjtbHCXgrTxPk9hBXp.jpg 1x, https://media.themoviedb.org/t/p/w128_and_h128_face/5BvxGhRE7yjtbHCXgrTxPk9hBXp.jpg 2x" alt="Shei" />
                                                        </a>
                                                    </span>

                                                    <div className="data">
                                                        <h3><a href="/u/Sheigutn">Shei</a></h3>
                                                        <div className="meter all">
                                                            <div className="gauge" style={{ width: '31.94780194141703%' }}></div>
                                                            <h4 className="font-bold">1,167,350</h4>
                                                        </div>
                                                        <div className="meter this_week">
                                                            <div className="gauge" style={{ width: '90.599173553719%' }}></div>
                                                            <h4 className="font-bold">14,909</h4>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <span className="avatar">
                                                        <a href="/u/bbp7318">
                                                            <span className="round initials background_color teal">b</span>
                                                        </a>
                                                    </span>

                                                    <div className="data">
                                                        <h3><a href="/u/bbp7318">bbp7318</a></h3>
                                                        <div className="meter all">
                                                            <div className="gauge" style={{ width: '0.34007228930830347%' }}></div>
                                                            <h4 className="font-bold">12,426</h4>
                                                        </div>
                                                        <div className="meter this_week">
                                                            <div className="gauge" style={{ width: '75.51045211473019%' }}></div>
                                                            <h4 className="font-bold">12,426</h4>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <span className="avatar">
                                                        <a href="/u/xuan444">
                                                            <span className="round initials background_color blue">x</span>
                                                        </a>
                                                    </span>

                                                    <div className="data">
                                                        <h3><a href="/u/xuan444">xuan444</a></h3>
                                                        <div className="meter all">
                                                            <div className="gauge" style={{ width: '2.8384514313222837%' }}></div>
                                                            <h4 className="font-bold">103,715</h4>
                                                        </div>
                                                        <div className="meter this_week">
                                                            <div className="gauge" style={{ width: '57.45624696159456%' }}></div>
                                                            <h4 className="font-bold">9,455</h4>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <span className="avatar">
                                                        <a href="/u/haea">
                                                            <span className="round initials background_color light_blue">h</span>
                                                        </a>
                                                    </span>

                                                    <div className="data">
                                                        <h3><a href="/u/haea">haea</a></h3>
                                                        <div className="meter all">
                                                            <div className="gauge" style={{ width: '0.2352809811028074%' }}></div>
                                                            <h4 className="font-bold">8,597</h4>
                                                        </div>
                                                        <div className="meter this_week">
                                                            <div className="gauge" style={{ width: '48.565872630043756%' }}></div>
                                                            <h4 className="font-bold">7,992</h4>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <span className="avatar">
                                                        <a href="/u/Amikaa">
                                                            <img loading="lazy" className="avatar" src="https://media.themoviedb.org/t/p/w64_and_h64_face/yhk7fVGt6fI0tLoF1AXY9drZm9o.jpg" srcSet="https://media.themoviedb.org/t/p/w64_and_h64_face/yhk7fVGt6fI0tLoF1AXY9drZm9o.jpg 1x, https://media.themoviedb.org/t/p/w128_and_h128_face/yhk7fVGt6fI0tLoF1AXY9drZm9o.jpg 2x" alt="「 Amika 」" />
                                                        </a>
                                                    </span>

                                                    <div className="data">
                                                        <h3><a href="/u/Amikaa">「 Amika 」</a></h3>
                                                        <div className="meter all">
                                                            <div className="gauge" style={{ width: '0.6395307626393397%' }}></div>
                                                            <h4 className="font-bold">23,368</h4>
                                                        </div>
                                                        <div className="meter this_week">
                                                            <div className="gauge" style={{ width: '42.4708313077297%' }}></div>
                                                            <h4 className="font-bold">6,989</h4>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <span className="avatar">
                                                        <a href="/u/chkchkboom">
                                                            <img loading="lazy" className="avatar" src="https://media.themoviedb.org/t/p/w64_and_h64_face/fEwOBxzLc0XzrusWoxPtjDwEvgO.jpg" srcSet="https://media.themoviedb.org/t/p/w64_and_h64_face/fEwOBxzLc0XzrusWoxPtjDwEvgO.jpg 1x, https://media.themoviedb.org/t/p/w128_and_h128_face/fEwOBxzLc0XzrusWoxPtjDwEvgO.jpg 2x" alt="chkchkboom" />
                                                        </a>
                                                    </span>

                                                    <div className="data">
                                                        <h3><a href="/u/chkchkboom">chkchkboom</a></h3>
                                                        <div className="meter all">
                                                            <div className="gauge" style={{ width: '0.9108825048324695%' }}></div>
                                                            <h4 className="font-bold">33,283</h4>
                                                        </div>
                                                        <div className="meter this_week">
                                                            <div className="gauge" style={{ width: '41.58361691784152%' }}></div>
                                                            <h4 className="font-bold">6,843</h4>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <span className="avatar">
                                                        <a href="/u/chenbei001">
                                                            <span className="round initials background_color teal">c</span>
                                                        </a>
                                                    </span>

                                                    <div className="data">
                                                        <h3><a href="/u/chenbei001">chenbei001</a></h3>
                                                        <div className="meter all">
                                                            <div className="gauge" style={{ width: '0.18634735376631567%' }}></div>
                                                            <h4 className="font-bold">6,809</h4>
                                                        </div>
                                                        <div className="meter this_week">
                                                            <div className="gauge" style={{ width: '41.37700534759358%' }}></div>
                                                            <h4 className="font-bold">6,809</h4>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <span className="avatar">
                                                        <a href="/u/banana_girl">
                                                            <img loading="lazy" className="avatar" src="https://media.themoviedb.org/t/p/w64_and_h64_face/A1pIXQZD86MzfP5pvr37C68YiGv.jpg" srcSet="https://media.themoviedb.org/t/p/w64_and_h64_face/A1pIXQZD86MzfP5pvr37C68YiGv.jpg 1x, https://media.themoviedb.org/t/p/w128_and_h128_face/A1pIXQZD86MzfP5pvr37C68YiGv.jpg 2x" alt="Banana" />
                                                        </a>
                                                    </span>

                                                    <div className="data">
                                                        <h3><a href="/u/banana_girl">Banana</a></h3>
                                                        <div className="meter all">
                                                            <div className="gauge" style={{ width: '60.16633054446323%' }}></div>
                                                            <h4 className="font-bold">2,198,435</h4>
                                                        </div>
                                                        <div className="meter this_week">
                                                            <div className="gauge" style={{ width: '35.37311618862421%' }}></div>
                                                            <h4 className="font-bold">5,821</h4>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <span className="avatar">
                                                        <a href="/u/itinerant">
                                                            <img loading="lazy" className="avatar" src="https://secure.gravatar.com/avatar/97c12ff90e43494be92d1fda76ff5902.jpg?s=64" srcSet="https://secure.gravatar.com/avatar/97c12ff90e43494be92d1fda76ff5902.jpg?s=64 1x, https://secure.gravatar.com/avatar/97c12ff90e43494be92d1fda76ff5902.jpg?s=128 2x" alt="itinerant" />
                                                        </a>
                                                    </span>

                                                    <div className="data">
                                                        <h3><a href="/u/itinerant">itinerant</a></h3>
                                                        <div className="meter all">
                                                            <div className="gauge" style={{ width: '0.1528765337257511%' }}></div>
                                                            <h4 className="font-bold">5,586</h4>
                                                        </div>
                                                        <div className="meter this_week">
                                                            <div className="gauge" style={{ width: '33.94506562955761%' }}></div>
                                                            <h4 className="font-bold">5,586</h4>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ol>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </main>
                </div>

                <footer className="single_column  ">
                    <nav>
                        <div className="join">
                            <img src="/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg" alt="The Movie Database (TMDB)" width="130" height="94" />

                            <a className="rounded" href="/signup">Gabung dengan Komunitas</a>
                        </div>

                        <div>
                            <h3>Dasar</h3>
                            <ul>
                                <li><a href="/about">Tentang TMDB</a></li>
                                <li><a href="/about/staying-in-touch">Hubungi Kami</a></li>
                                <li><a href="/talk">Forum Dukungan</a></li>
                                <li><a href="https://developer.themoviedb.org/docs" target="_blank">API</a></li>
                                <li><a href="https://status.themoviedb.org/" target="_blank" rel="noopener">Status Sistem</a></li>
                            </ul>
                        </div>
                        <div>
                            <h3>Sumbang</h3>
                            <ul>
                                <li><a href="/bible"><span className="glyphicons glyphicons-asterisk"></span> Panduan Kontribusi</a></li>
                                <li><a href="/movie/new">Tambah Film Baru</a></li>
                                <li><a href="/tv/new">Tambah Serial TV Baru</a></li>
                            </ul>
                        </div>
                        <div>
                            <h3>Komunitas</h3>
                            <ul>
                                <li><a href="/documentation/community/guidelines">Pedoman</a></li>
                                <li><a href="/discuss">Diskusi</a></li>
                                <li><a href="/leaderboard">Papan peringkat</a></li>
                            </ul>
                        </div>
                        <div>
                            <h3>Aturan</h3>
                            <ul>
                                <li><a href="/terms-of-use">Ketentuan Penggunaan</a></li>
                                <li><a href="/api-terms-of-use">Ketentuan Penggunaan API</a></li>
                                <li><a href="/privacy-policy">Kebijakan Privasi</a></li>
                                <li><a href="/dmca-policy">DMCA Policy</a></li>
                            </ul>
                        </div>
                    </nav>

                    <section>Build 6877b7b (7793)</section>
                </footer>

                <div id="new_media_template" className="hide">
                    <div className="settings_content">
                        <p>Can't find a movie or TV show? Login to create it.</p>
                    </div>
                </div>

                <div id="settings_tooltip" className="hide">
                    <div className="settings_content">
                        <div className="group no_pad">
                            <p><a href="/login">Masuk</a></p>
                        </div>
                        <div className="group">
                            <p><a href="/signup">Daftar</a></p>
                        </div>
                    </div>
                </div>

                <div id="keyboard_shortcuts_popup" className="hide">

                </div>

                <div className="hide">
                    <div id="options_tooltip">
                        <div className="settings_content">
                            <div className="group no_pad">
                                <p className="no_hover">Want to rate or add this item to a list?</p>
                                <p><a href="/login">Masuk <span className="glyphicons_v2 chevron-right blue pad_left"></span></a></p>
                            </div>
                            <div className="group">
                                <p className="no_hover">Not a member?</p>
                                <p><a href="/signup">Sign up and join the community <span className="glyphicons_v2 chevron-right blue pad_left"></span></a></p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="hide">
                    <div id="video_popup"></div>
                </div>

                <iframe allow="join-ad-interest-group" data-tagging-id="G-4257LNMWD9" data-load-time="1725405699007" height="0" width="0" src="https://td.doubleclick.net/td/ga/rul?tid=G-4257LNMWD9&amp;gacid=1682111753.1725405699&amp;gtm=45je4930v9127323846z872548093za200zb72548093&amp;dma=0&amp;gcd=13l3l3l3l1l1&amp;npa=0&amp;pscdl=noapi&amp;aip=1&amp;fledge=1&amp;frm=0&amp;tag_exp=0&amp;z=1574186949" style={{ display: 'none !important', visibility: 'hidden' }}></iframe><div className="k-widget k-window" tabIndex="0" style={{ minWidth: '90px', minHeight: '50px', maxWidth: '1400px', width: '90vw', display: 'none', top: '138.89px', left: '256px', position: 'fixed' }}><div className="k-window-titlebar"><span className="k-window-title">Keyboard Shortcuts</span><div className="k-window-actions"><a role="button" href="#" className="k-button k-flat k-button-icon k-window-action" aria-label="Close"><span className="k-icon k-i-close"></span></a></div></div><div className="content k-flex-col k-window-content" data-role="window" style={{ display: 'block' }}>
                    <div className="keyboard_shortcuts">
                        <div className="column">
                            <h3>Global</h3>
                            <div><span>s</span> focus the search bar</div>
                            <div><span>p</span> open profile menu</div>
                            <div><span>esc</span> close an open window</div>
                            <div><span>?</span> open keyboard shortcut window</div>

                            <h3>On media pages</h3>
                            <div><span>b</span> go back (or to parent when applicable)</div>
                            <div><span>e</span> go to edit page</div>

                            <h3>On TV season pages</h3>
                            <div><span>→</span> (right arrow) go to next season</div>
                            <div><span>←</span> (left arrow) go to previous season</div>

                            <h3>On TV episode pages</h3>
                            <div><span>→</span> (right arrow) go to next episode</div>
                            <div><span>←</span> (left arrow) go to previous episode</div>

                            <h3>On all image pages</h3>
                            <div><span>a</span> open add image window</div>
                        </div>

                        <div className="column">
                            <h3>On all edit pages</h3>
                            <div><span>t</span> open translation selector</div>
                            <div><span>ctrl</span>+ <span>s</span> submit form</div>

                            <h3>On discussion pages</h3>
                            <div><span>n</span> create new discussion</div>
                            <div><span>w</span> toggle watching status</div>
                            <div><span>p</span> toggle public/private</div>
                            <div><span>c</span> toggle close/open</div>
                            <div><span>a</span> open activity</div>
                            <div><span>r</span> reply to discussion</div>
                            <div><span>l</span> go to last reply</div>
                            <div><span>ctrl</span>+ <span>enter</span> submit your message</div>
                            <div><span>→</span> (right arrow) next page</div>
                            <div><span>←</span> (left arrow) previous page</div>
                        </div>
                    </div>

                    <div className="keyboard_shortcuts k-flex-col k-mt-6 k-mb-3">
                        <h3 className="k-pb-1 k-font-weight-bold settings_label">Settings</h3>
                        <label className="k-display-flex k-align-items-center k-cursor-pointer k-pt-1 k-pl-1" htmlFor="toggle_keyboard_shortcuts" style={{ width: 'fit-content' }} data-role="tooltip">
                            <input type="checkbox" id="toggle_keyboard_shortcuts" className="k-mr-2 k-cursor-pointer" name="toggle_keyboard_shortcuts" disabled="" />
                            Enable Keyboard Shortcuts
                        </label>
                    </div>
                </div></div><div id="onetrust-consent-sdk"><div className="onetrust-pc-dark-filter ot-hide ot-fade-in"></div><div id="onetrust-banner-sdk" className="otFlat bottom ot-wo-title" role="region" aria-label="Cookie banner"><div role="alertdialog" aria-describedby="onetrust-policy-text" aria-label="Privasi"><div className="ot-sdk-container"><div className="ot-sdk-row"><div id="onetrust-group-container" className="ot-sdk-eight ot-sdk-columns"><div className="banner_logo"></div><div id="onetrust-policy"><div id="onetrust-policy-text">Kami menggunakan cookie agar situs kami berfungsi dengan baik, mempersonalisasikan konten dan iklan, menyediakan fitur media sosial, dan menganalisis trafik kami. Kami juga berbagi informasi tentang penggunaan situs kami oleh Anda dengan mitra media sosial, periklanan, dan analisis kami.</div></div></div><div id="onetrust-button-group-parent" className="ot-sdk-three ot-sdk-columns has-reject-all-button"><div id="onetrust-button-group"><button id="onetrust-pc-btn-handler">Pengaturan Cookie</button> <button id="onetrust-reject-all-handler">Tolak Semua</button> <button id="onetrust-accept-btn-handler">Terima Semua Cookie</button></div></div></div></div><div id="onetrust-close-btn-container"><button className="onetrust-close-btn-handler onetrust-close-btn-ui banner-close-button ot-close-icon" style={{ backgroundImage: 'url(&quot;https://cdn.cookielaw.org/logos/static/ot_close.svg&quot;)' }} aria-label="Tutup"></button></div></div></div><div id="onetrust-pc-sdk" className="otPcTab ot-hide ot-fade-in" lang="id" aria-label="Preference center" role="region"><div role="alertdialog" aria-modal="true" aria-describedby="ot-pc-desc" style={{ height: '100%' }} aria-label="Pusat Preferensi Privasi"><div className="ot-pc-header" role="presentation"><div className="ot-pc-logo" role="img" aria-label="Logo Perusahaan"><img alt="Logo Perusahaan" src="https://cdn.cookielaw.org/logos/fe65a9cb-9e2b-4d74-a8ff-1443aee49ffb/53433444-4f4a-4301-9ad8-c0515ad1e9cf/74077dc2-f2a9-4666-9f02-be7d89b542d9/tmdb_logo.png" /></div><div className="ot-title-cntr"><h2 id="ot-pc-title">Pusat Preferensi Privasi</h2><div className="ot-close-cntr"><button id="close-pc-btn-handler" className="ot-close-icon" aria-label="Tutup" style={{ backgroundImage: 'url(&quot;https://cdn.cookielaw.org/logos/static/ot_close.svg&quot;)' }}></button></div></div></div><div id="ot-pc-content" className="ot-pc-scrollbar ot-sdk-row"><div className="ot-optout-signal ot-hide"><div className="ot-optout-icon"><svg xmlns="http://www.w3.org/2000/svg"><path className="ot-floating-button__svg-fill" d="M14.588 0l.445.328c1.807 1.303 3.961 2.533 6.461 3.688 2.015.93 4.576 1.746 7.682 2.446 0 14.178-4.73 24.133-14.19 29.864l-.398.236C4.863 30.87 0 20.837 0 6.462c3.107-.7 5.668-1.516 7.682-2.446 2.709-1.251 5.01-2.59 6.906-4.016zm5.87 13.88a.75.75 0 00-.974.159l-5.475 6.625-3.005-2.997-.077-.067a.75.75 0 00-.983 1.13l4.172 4.16 6.525-7.895.06-.083a.75.75 0 00-.16-.973z" fill="#FFF" fillRule="evenodd"></path></svg></div><span></span></div><div className="ot-sdk-container ot-grps-cntr ot-sdk-column"><div className="ot-sdk-four ot-sdk-columns ot-tab-list" aria-label="Cookie Categories"><ul className="ot-cat-grp" role="tablist"><li className="ot-abt-tab" role="presentation"><div className="ot-active-menu category-menu-switch-handler" role="tab" tabIndex="0" aria-selected="true" aria-controls="ot-tab-desc"><h3 id="ot-pvcy-txt">Privasi Anda</h3></div></li><li className="ot-cat-item ot-always-active-group ot-vs-config" role="presentation" data-optanongroupid="C0001"><div className="category-menu-switch-handler" role="tab" tabIndex="-1" aria-selected="false" aria-controls="ot-desc-id-C0001"><h3 id="ot-header-id-C0001">Cookie yang Sangat Diperlukan</h3></div></li><li className="ot-cat-item ot-vs-config" role="presentation" data-optanongroupid="C0002"><div className="category-menu-switch-handler" role="tab" tabIndex="-1" aria-selected="false" aria-controls="ot-desc-id-C0002"><h3 id="ot-header-id-C0002">Cookie Performa</h3></div></li><li className="ot-cat-item ot-vs-config" role="presentation" data-optanongroupid="C0003"><div className="category-menu-switch-handler" role="tab" tabIndex="-1" aria-selected="false" aria-controls="ot-desc-id-C0003"><h3 id="ot-header-id-C0003">Cookie Fungsional</h3></div></li><li className="ot-cat-item ot-vs-config" role="presentation" data-optanongroupid="C0004"><div className="category-menu-switch-handler" role="tab" tabIndex="-1" aria-selected="false" aria-controls="ot-desc-id-C0004"><h3 id="ot-header-id-C0004">Cookie Penargetan</h3></div></li></ul></div><div className="ot-tab-desc ot-sdk-eight ot-sdk-columns"><div className="ot-desc-cntr" id="ot-tab-desc" tabIndex="0" role="tabpanel" aria-labelledby="ot-pvcy-hdr"><h4 id="ot-pvcy-hdr">Privasi Anda</h4><p id="ot-pc-desc" className="ot-grp-desc">Saat Anda mengunjungi situs web, situs web dapat menyimpan atau mengambil informasi di browser Anda, sebagian besar dalam bentuk cookie. Informasi ini mungkin tentang Anda, preferensi Anda, perangkat Anda, atau digunakan untuk menjalankan situs seperti yang Anda harapkan. Informasi tersebut biasanya tidak mengidentifikasi diri Anda secara langsung, tetapi dapat memberi Anda pengalaman web yang lebih personal. Anda dapat memilih untuk tidak mengizinkan beberapa jenis cookie. Klik pada judul kategori yang berbeda untuk mencari tahu selengkapnya dan mengubah pengaturan default kami. Namun, perlu Anda ketahui bahwa memblokir beberapa jenis cookie dapat mempengaruhi pengalaman Anda menjelajahi situs dan layanan yang dapat kami tawarkan.
                    <br />
                    <a href="https://cookiepedia.co.uk/giving-consent-to-cookies" className="privacy-notice-link" rel="noopener" target="_blank" aria-label="Informasi lebih lanjut tentang privasi Anda, terbuka di tab baru">Informasi Lainnya</a></p></div><div className="ot-desc-cntr ot-hide ot-always-active-group" role="tabpanel" tabIndex="0" id="ot-desc-id-C0001"><div className="ot-grp-hdr1"><h4 className="ot-cat-header">Cookie yang Sangat Diperlukan</h4><div className="ot-tgl-cntr"><div className="ot-always-active">Selalu Aktif</div></div></div><p className="ot-grp-desc ot-category-desc">Cookie ini diperlukan agar situs web berfungsi dan tidak dapat dinonaktifkan di sistem kami. Cookie ini biasanya hanya diatur sebagai tanggapan atas tindakan yang Anda lakukan yang sejenis dengan permintaan layanan, seperti pengaturan preferensi privasi, proses masuk, atau pengisian formulir. Anda dapat mengatur browser Anda agar memblokir atau memperingatkan Anda tentang cookie ini, tetapi beberapa bagian situs mungkin tidak berfungsi.</p></div><div className="ot-desc-cntr ot-hide" role="tabpanel" tabIndex="0" id="ot-desc-id-C0002"><div className="ot-grp-hdr1"><h4 className="ot-cat-header">Cookie Performa</h4><div className="ot-tgl"><input type="checkbox" name="ot-group-id-C0002" id="ot-group-id-C0002" aria-checked="false" role="switch" className="category-switch-handler" data-optanongroupid="C0002" aria-labelledby="ot-header-id-C0002" /> <label className="ot-switch" htmlFor="ot-group-id-C0002"><span className="ot-switch-nob" aria-checked="false" role="switch" aria-label="Cookie Performa"></span> <span className="ot-label-txt">Cookie Performa</span></label> </div><div className="ot-tgl-cntr"></div></div><p className="ot-grp-desc ot-category-desc">Cookie ini memungkinkan kami menghitung kunjungan dan sumber trafik agar kami dapat mengukur dan meningkatkan performa situs kami. Cookie ini membantu kami mengetahui halaman mana yang paling populer maupun tidak dan melihat bagaimana para pengunjung bernavigasi di situs. Semua informasi yang dikumpulkan cookie ini dibuat agregat sehingga anonim. Jika cookie ini tidak diizinkan, kami tidak akan tahu saat Anda mengunjungi situs kami.</p></div><div className="ot-desc-cntr ot-hide" role="tabpanel" tabIndex="0" id="ot-desc-id-C0003"><div className="ot-grp-hdr1"><h4 className="ot-cat-header">Cookie Fungsional</h4><div className="ot-tgl"><input type="checkbox" name="ot-group-id-C0003" id="ot-group-id-C0003" aria-checked="false" role="switch" className="category-switch-handler" data-optanongroupid="C0003" aria-labelledby="ot-header-id-C0003" /> <label className="ot-switch" htmlFor="ot-group-id-C0003"><span className="ot-switch-nob" aria-checked="false" role="switch" aria-label="Cookie Fungsional"></span> <span className="ot-label-txt">Cookie Fungsional</span></label> </div><div className="ot-tgl-cntr"></div></div><p className="ot-grp-desc ot-category-desc">Cookie ini memungkinkan penyediaan fungsionalitas dan personalisasi yang ditingkatkan, seperti video dan obrolan langsung. Pengaturannya dikontrol oleh kami atau pihak ketiga yang menyediakan layanan yang telah kami tambahkan ke halaman kami. Jika cookie ini tidak diizinkan, maka beberapa atau semua fungsionalitas mungkin tidak berfungsi dengan baik.</p></div><div className="ot-desc-cntr ot-hide" role="tabpanel" tabIndex="0" id="ot-desc-id-C0004"><div className="ot-grp-hdr1"><h4 className="ot-cat-header">Cookie Penargetan</h4><div className="ot-tgl">
                        <input type="checkbox" name="ot-group-id-C0004" id="ot-group-id-C0004" aria-checked="false" role="switch" className="category-switch-handler" data-optanongroupid="C0004" aria-labelledby="ot-header-id-C0004" /> <label className="ot-switch" htmlFor="ot-group-id-C0004"><span className="ot-switch-nob" aria-checked="false" role="switch" aria-label="Cookie Penargetan"></span> <span className="ot-label-txt">Cookie Penargetan</span></label> </div><div className="ot-tgl-cntr"></div></div><p className="ot-grp-desc ot-category-desc">Cookie ini diatur di seluruh situs kami oleh mitra periklanan kami. Cookie ini dapat digunakan oleh perusahaan tersebut untuk membangun profil ketertarikan Anda dan menampilkan iklan yang relevan di situs lain. Cookie ini bekerja dengan cara mengidentifikasi browser dan perangkat Anda secara unik. Jika cookie ini tidak diizinkan, Anda tidak akan mendapatkan periklanan tertarget kami di situs web yang lain.</p></div></div></div></div><section id="ot-pc-lst" className="ot-hide ot-enbl-chr"><div className="ot-lst-cntr ot-pc-scrollbar"><div id="ot-pc-hdr"><div id="ot-lst-title"><button className="ot-link-btn back-btn-handler" aria-label="Back"><svg id="ot-back-arw" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 444.531 444.531" xmlSpace="preserve"><title>Back Button</title><g><path fill="#656565" d="M213.13,222.409L351.88,83.653c7.05-7.043,10.567-15.657,10.567-25.841c0-10.183-3.518-18.793-10.567-25.835
                  l-21.409-21.416C323.432,3.521,314.817,0,304.637,0s-18.791,3.521-25.841,10.561L92.649,196.425
                  c-7.044,7.043-10.566,15.656-10.566,25.841s3.521,18.791,10.566,25.837l186.146,185.864c7.05,7.043,15.66,10.564,25.841,10.564
                  s18.795-3.521,25.834-10.564l21.409-21.412c7.05-7.039,10.567-15.604,10.567-25.697c0-10.085-3.518-18.746-10.567-25.978
                  L213.13,222.409z"></path></g></svg></button><h3>Daftar Cookie</h3></div><div className="ot-lst-subhdr"><div id="ot-search-cntr"><p role="status" className="ot-scrn-rdr"></p>
                                <input id="vendor-search-handler" type="text" name="vendor-search-handler" placeholder="Mencari..." aria-label="Pencarian daftar cookie" /> <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 -30 110 110" aria-hidden="true"><path fill="#2e3644" d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23
              s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92
              c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17
              s-17-7.626-17-17S14.61,6,23.984,6z">
                                </path>
                                </svg>
                            </div><div id="ot-fltr-cntr"><button id="filter-btn-handler" aria-label="Filter" aria-haspopup="true"><svg role="presentation" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 402.577 402.577" xmlSpace="preserve"><title>Filter Button</title><g><path fill="#2c3643" d="M400.858,11.427c-3.241-7.421-8.85-11.132-16.854-11.136H18.564c-7.993,0-13.61,3.715-16.846,11.136
                            c-3.234,7.801-1.903,14.467,3.999,19.985l140.757,140.753v138.755c0,4.955,1.809,9.232,5.424,12.854l73.085,73.083
                            c3.429,3.614,7.71,5.428,12.851,5.428c2.282,0,4.66-0.479,7.135-1.43c7.426-3.238,11.14-8.851,11.14-16.845V172.166L396.861,31.413
                            C402.765,25.895,404.093,19.231,400.858,11.427z"></path></g></svg></button></div></div></div><section id="ot-lst-cnt" className="ot-pc-scrollbar"><div className="ot-sdk-row"><div className="ot-sdk-column"><div id="ot-sel-blk"><div className="ot-sel-all"><div className="ot-sel-all-hdr"><span className="ot-consent-hdr">Consent</span> <span className="ot-li-hdr">Leg.Interest</span></div><div className="ot-sel-all-chkbox"><div className="ot-chkbox" id="ot-selall-hostcntr"><input id="select-all-hosts-groups-handler" type="checkbox" aria-checked="false" /> <label htmlFor="select-all-hosts-groups-handler"><span className="ot-label-txt">checkbox label</span></label> <span className="ot-label-status">label</span></div><div className="ot-chkbox" id="ot-selall-vencntr">
                                <input id="select-all-vendor-groups-handler" type="checkbox" aria-checked="false" /> <label htmlFor="select-all-vendor-groups-handler"><span className="ot-label-txt">checkbox label</span></label> <span className="ot-label-status">label</span></div><div className="ot-chkbox" id="ot-selall-licntr"><input id="select-all-vendor-leg-handler" type="checkbox" aria-checked="false" /> <label htmlFor="select-all-vendor-leg-handler"><span className="ot-label-txt">checkbox label</span></label> <span className="ot-label-status">label</span></div></div></div></div></div></div></section></div><div id="ot-anchor"></div><section id="ot-fltr-modal"><div id="ot-fltr-cnt"><button id="clear-filters-handler">Clear</button><div className="ot-fltr-scrlcnt ot-pc-scrollbar"><div className="ot-fltr-opts"><div className="ot-fltr-opt"><div className="ot-chkbox"><input id="chkbox-id" type="checkbox" aria-checked="false" className="category-filter-handler" /> <label htmlFor="chkbox-id"><span className="ot-label-txt">checkbox label</span></label> <span className="ot-label-status">label</span></div></div></div><div className="ot-fltr-btns"><button id="filter-apply-handler">Apply</button> <button id="filter-cancel-handler">Cancel</button></div></div></div></section></section><div className="ot-pc-footer"><div className="ot-btn-container"><button className="save-preference-btn-handler onetrust-close-btn-handler">Konfirmasi Pilihan Saya</button><div className="ot-btn-subcntr"><button className="ot-pc-refuse-all-handler">Tolak Semua</button> <button id="accept-recommended-btn-handler">Izinkan Semua</button></div></div><div className="ot-pc-footer-logo"><a href="https://www.onetrust.com/products/cookie-consent/" target="_blank" rel="noopener noreferrer" aria-label="Powered by OneTrust Terbuka di Tab baru"><img alt="Powered by Onetrust" src="https://cdn.cookielaw.org/logos/static/powered_by_logo.svg" title="Powered by OneTrust Terbuka di Tab baru" /></a></div></div>
                </div>
                    <iframe className="ot-text-resize" sandbox="allow-same-origin" title="onetrust-text-resize" style={{ position: 'absolute', top: '-50000px', width: '100em' }} aria-hidden="true"></iframe></div></div></body>
        </React.Fragment >
    )
}

export default Home;
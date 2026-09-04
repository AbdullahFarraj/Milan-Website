with open('index.html', 'r', encoding='utf-8') as f:
    content = f.read()

reviews_html = '''
        <!-- Google Reviews -->
        <section id="reviews" class="reviews-section" data-aos="fade-up" style="padding: 80px 0; background: var(--bg-dark);">
            <div class="container">
                <div class="section-header" style="text-align: center; margin-bottom: 50px;">
                    <h2 style="color: white; font-size: 2.5rem; font-weight: 800; margin-bottom: 10px;">What Our Clients Say</h2>
                    <p style="color: var(--text-muted); font-size: 1.1rem;">Rated 5.0 <i class="fa-solid fa-star" style="color: var(--primary);"></i> on <span style="color: white; font-weight: 600;">Google</span></p>
                </div>
                <div class="reviews-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 30px;">
                    <!-- Review 1 -->
                    <div class="review-card" style="background: rgba(255,255,255,0.03); padding: 30px; border-radius: 15px; border: 1px solid rgba(255,255,255,0.05); transition: transform 0.3s ease;">
                        <div class="review-header" style="display: flex; align-items: center; gap: 15px; margin-bottom: 20px;">
                            <div class="avatar" style="width: 50px; height: 50px; border-radius: 50%; background: var(--primary); color: var(--bg-dark); display: flex; align-items: center; justify-content: center; font-size: 1.5rem; font-weight: bold;">F</div>
                            <div>
                                <h4 style="margin: 0; color: white; font-size: 1.1rem;">Fahim Ck</h4>
                                <div class="stars" style="color: var(--primary); font-size: 0.9rem;">
                                    <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
                                </div>
                            </div>
                            <i class="fa-brands fa-google" style="margin-left: auto; font-size: 1.5rem; color: #4285F4;"></i>
                        </div>
                        <p style="color: var(--text-muted); font-size: 0.95rem; line-height: 1.6;">"I’ve been purchasing from this shop regularly, and their service has always been outstanding. The quality of materials is top‑notch, prices are competitive, and they maintain great stock availability."</p>
                    </div>

                    <!-- Review 2 -->
                    <div class="review-card" style="background: rgba(255,255,255,0.03); padding: 30px; border-radius: 15px; border: 1px solid rgba(255,255,255,0.05); transition: transform 0.3s ease;">
                        <div class="review-header" style="display: flex; align-items: center; gap: 15px; margin-bottom: 20px;">
                            <div class="avatar" style="width: 50px; height: 50px; border-radius: 50%; background: var(--primary); color: var(--bg-dark); display: flex; align-items: center; justify-content: center; font-size: 1.5rem; font-weight: bold;">T</div>
                            <div>
                                <h4 style="margin: 0; color: white; font-size: 1.1rem;">thaju dheen</h4>
                                <div class="stars" style="color: var(--primary); font-size: 0.9rem;">
                                    <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
                                </div>
                            </div>
                            <i class="fa-brands fa-google" style="margin-left: auto; font-size: 1.5rem; color: #4285F4;"></i>
                        </div>
                        <p style="color: var(--text-muted); font-size: 0.95rem; line-height: 1.6;">"Best building material shop in dubai. Staff are knowledgeable, friendly, and quick to assist with any requirement."</p>
                    </div>

                    <!-- Review 3 -->
                    <div class="review-card" style="background: rgba(255,255,255,0.03); padding: 30px; border-radius: 15px; border: 1px solid rgba(255,255,255,0.05); transition: transform 0.3s ease;">
                        <div class="review-header" style="display: flex; align-items: center; gap: 15px; margin-bottom: 20px;">
                            <div class="avatar" style="width: 50px; height: 50px; border-radius: 50%; background: var(--primary); color: var(--bg-dark); display: flex; align-items: center; justify-content: center; font-size: 1.5rem; font-weight: bold;">P</div>
                            <div>
                                <h4 style="margin: 0; color: white; font-size: 1.1rem;">printo cm</h4>
                                <div class="stars" style="color: var(--primary); font-size: 0.9rem;">
                                    <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
                                </div>
                            </div>
                            <i class="fa-brands fa-google" style="margin-left: auto; font-size: 1.5rem; color: #4285F4;"></i>
                        </div>
                        <p style="color: var(--text-muted); font-size: 0.95rem; line-height: 1.6;">"Delivery is fast and reliable, making the whole process smooth and stress‑free. Highly recommended for anyone looking for trusted building materials in the area."</p>
                    </div>
                </div>
                
                <div style="text-align: center; margin-top: 50px;">
                    <a href="https://maps.app.goo.gl/VhK61zwAapVDZj9bA" target="_blank" class="btn btn-primary" style="padding: 15px 35px; border-radius: 30px; font-weight: 600; text-decoration: none; display: inline-block; transition: all 0.3s ease;">
                        Read all reviews on Google <i class="fa-brands fa-google" style="margin-left: 8px;"></i>
                    </a>
                </div>
            </div>
        </section>
'''

content = content.replace('    </main>', reviews_html + '\n    </main>')

if 'id="reviews"' not in content:
    with open('index.html', 'w', encoding='utf-8') as f:
        f.write(content)
